import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { JOB_1, JOB_2 } from '../../constants/job';

import { Job, JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
    service = TestBed.inject(JobService);
  });

  it('should return expected job list.', (done: DoneFn) => {
    // Arrange.
    const expectedJobList: Job[] = [JOB_1, JOB_2];
    httpClientSpy.get.and.returnValue(of(expectedJobList));

    // Act.
    service.getJobList().subscribe({
      next: jobList => {
        // Assert.
        expect(jobList).toEqual(expectedJobList);
        done();
      },
      error: done.fail,
    });

    // Assert.
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
