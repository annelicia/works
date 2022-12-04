import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLabelComponent } from '../../../common/components/icon-label/icon-label.component';

import { JobItemComponent } from './job-item.component';

describe('JobItemComponent', () => {
  let component: JobItemComponent;
  let fixture: ComponentFixture<JobItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobItemComponent,
        IconLabelComponent,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
