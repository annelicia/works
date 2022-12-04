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

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

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
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
