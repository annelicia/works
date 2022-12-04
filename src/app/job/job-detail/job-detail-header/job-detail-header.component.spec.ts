import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyButtonComponent } from 'src/app/common/components/apply-button/apply-button.component';
import { IconLabelComponent } from 'src/app/common/components/icon-label/icon-label.component';
import { TagComponent } from 'src/app/common/components/tag/tag.component';

import { JobDetailHeaderComponent } from './job-detail-header.component';

describe('JobDetailHeaderComponent', () => {
  let component: JobDetailHeaderComponent;
  let fixture: ComponentFixture<JobDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDetailHeaderComponent,
        IconLabelComponent,
        ApplyButtonComponent,
        TagComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
