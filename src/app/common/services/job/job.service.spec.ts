import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NEVER, of } from 'rxjs';

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

  it('should return expected job list and call correct url job list and job detail for first time fetch.', (done: DoneFn) => {
    // Arrange.
    const expectedJobList: Job[] = [JOB_1, JOB_2];
    httpClientSpy.get.and.returnValue(of(expectedJobList));

    // Act.
    service.fetchJobList();
    service.jobList$.subscribe({
      next: jobList => {
        // Assert.
        expect(jobList).toEqual(expectedJobList);
        done();
      },
      error: done.fail,
    });

    // Assert.
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://works-api.vercel.app/api/getJobList?sortBy=publishedOnJobBoard%2Cdesc&limit=30&locale=en');
    expect(httpClientSpy.get).toHaveBeenCalledWith(`https://works-api.vercel.app/api/getJobDetail?id=${JOB_1.jobId}`);
  });

  it('should call job list url only when is not first time fetch.', () => {
    // Arrange.
    const expectedJobList: Job[] = [JOB_1, JOB_2];
    httpClientSpy.get.and.returnValue(of(expectedJobList));
    service.fetchJobList();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(2);

    // Act.
    service.fetchJobList();

    // Assert.
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://works-api.vercel.app/api/getJobList?sortBy=publishedOnJobBoard%2Cdesc&limit=30&offset=30&locale=en');
    expect(httpClientSpy.get).toHaveBeenCalledTimes(3);
  });

  it('should call http once if the isLoading is true.', () => {
    // Arrange.
    httpClientSpy.get.and.returnValue(NEVER);

    // Act.
    service.fetchJobList();
    service.fetchJobList();
    service.fetchJobList();

    // Assert.
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
