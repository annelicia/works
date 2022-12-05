import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobService } from 'src/app/common/services/job/job.service';
import { FakeJobServiceModuleBuilder } from 'src/app/common/services/job/job.service.fake';

import { JobDetailDescriptionComponent } from './job-detail-description.component';

describe('JobDetailDescriptionComponent', () => {
  let component: JobDetailDescriptionComponent;
  let fixture: ComponentFixture<JobDetailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobDetailDescriptionComponent,
      ],
      providers: [
        new FakeJobServiceModuleBuilder().build()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobDetailDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
