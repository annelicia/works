import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyButtonComponent } from '../apply-button/apply-button.component';
import { IconLabelComponent } from '../icon-label/icon-label.component';
import { JobDetailFooterComponent } from '../job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from '../job-detail-header/job-detail-header.component';
import { JobDetailDescriptionComponent } from '../job-detail/job-detail-description/job-detail-description.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { JobItemComponent } from '../job-item/job-item.component';
import { JobListComponent } from '../job-list/job-list.component';
import { StepComponent } from '../step/step.component';
import { TagComponent } from '../tag/tag.component';

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
