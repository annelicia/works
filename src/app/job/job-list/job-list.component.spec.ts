import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobService } from 'src/app/common/services/job/job.service';

import { FakeJobServiceModuleBuilder } from 'src/app/common/services/job/job.service.fake';
import { JobListComponent } from './job-list.component';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;
  let jobService: JobService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListComponent],
      providers: [
        new FakeJobServiceModuleBuilder().build(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jobService = TestBed.inject(JobService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch when remaining height of job list is less than threshold.', () => {
    // Arrange.
    const event = {
      target: {
        scrollHeight: '5000px',
        clientHeight: '1000px',
        scrollTop: '2500px',
      }
    }

    // Act.
    const element = fixture.nativeElement;
    const elementJobListContainer = element.querySelector(".job-list-container");
    elementJobListContainer.dispatchEvent(new Event('scroll', event as any));

    // Assert.
    expect(jobService.fetchJobList).toHaveBeenCalledTimes(1);
  });
});
