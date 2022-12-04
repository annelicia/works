import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyButtonComponent } from '../../common/components/apply-button/apply-button.component';
import { IconLabelComponent } from '../../common/components/icon-label/icon-label.component';
import { StepComponent } from '../../common/components/step/step.component';
import { TagComponent } from '../../common/components/tag/tag.component';
import { JobDetailDescriptionComponent } from './job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job-detail-header/job-detail-header.component';

import { JobDetailComponent } from './job-detail.component';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobDetailComponent,
        JobDetailHeaderComponent,
        IconLabelComponent,
        ApplyButtonComponent,
        TagComponent,
        JobDetailDescriptionComponent,
        JobDetailFooterComponent,
        StepComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
