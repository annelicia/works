import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailDescriptionComponent } from './job-detail-description.component';

describe('JobDetailDescriptionComponent', () => {
  let component: JobDetailDescriptionComponent;
  let fixture: ComponentFixture<JobDetailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailDescriptionComponent ]
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
