import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';

import { ApplyButtonComponent } from '../common/components/apply-button/apply-button.component';
import { FakeJobServiceModuleBuilder } from '../common/services/job/job.service.fake';
import { IconLabelComponent } from '../common/components/icon-label/icon-label.component';
import { JobComponent } from './job.component';
import { JobDetailDescriptionComponent } from './job-detail/job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job-detail/job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job-detail/job-detail-header/job-detail-header.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobService } from '../common/services/job/job.service';
import { StepComponent } from '../common/components/step/step.component';
import { TagComponent } from '../common/components/tag/tag.component';
import { JOB_1, JOB_2 } from '../common/constants/job';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;
  let jobService: JobService;
  let viewportScrollerSpy: jasmine.SpyObj<ViewportScroller>;

  beforeEach(async () => {
    viewportScrollerSpy = jasmine.createSpyObj('ViewportScroller', ['scrollToPosition']);
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
        new FakeJobServiceModuleBuilder().build(),
        { provide: ViewportScroller, useValue: viewportScrollerSpy },
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

  it('should call onSelect when app-job-list clicked.', () => {
    // Arrange.
    component.jobList = [JOB_1, JOB_2];
    fixture.detectChanges();

    // Act.
    const element = fixture.nativeElement;
    const appJobList = element.querySelector('.app-job-list');
    appJobList.dispatchEvent(new CustomEvent<string>('select', { detail: JOB_1.jobId }));

    // Assert.
    expect(jobService.selectJobId).toHaveBeenCalledTimes(1);
  });
});
