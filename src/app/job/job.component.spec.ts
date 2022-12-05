import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyButtonComponent } from '../common/components/apply-button/apply-button.component';
import { IconLabelComponent } from '../common/components/icon-label/icon-label.component';
import { JobDetailDescriptionComponent } from './job-detail/job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job-detail/job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job-detail/job-detail-header/job-detail-header.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { JobListComponent } from './job-list/job-list.component';
import { StepComponent } from '../common/components/step/step.component';
import { TagComponent } from '../common/components/tag/tag.component';

import { JobComponent } from './job.component';
import { FakeJobServiceModuleBuilder } from '../common/services/job/job.service.fake';
import { JobService } from '../common/services/job/job.service';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;
  let jobService: JobService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobComponent,
        JobListComponent,
        JobDetailComponent,
        JobDetailHeaderComponent,
        JobDetailDescriptionComponent,
        JobDetailFooterComponent,
        ApplyButtonComponent,
        JobItemComponent,
        IconLabelComponent,
        TagComponent,
        StepComponent,
      ],
      providers: [
        new FakeJobServiceModuleBuilder().build()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
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
    const elementAppJobList = element.querySelector(".app-job-list");
    elementAppJobList.dispatchEvent(new Event('scroll', event as any));

    // Assert.
    expect(jobService.fetchJobList).toHaveBeenCalledTimes(2);
  });
});
