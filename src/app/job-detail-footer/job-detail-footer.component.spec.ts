import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailFooterComponent } from './job-detail-footer.component';

describe('JobDetailFooterComponent', () => {
  let component: JobDetailFooterComponent;
  let fixture: ComponentFixture<JobDetailFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
