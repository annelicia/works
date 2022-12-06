import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyButtonComponent } from '../common/components/apply-button/apply-button.component';
import { FakeJobServiceModuleBuilder } from '../common/services/job/job.service.fake';
import { MobileFooterComponent } from './mobile-footer.component';

describe('MobileFooterComponent', () => {
  let component: MobileFooterComponent;
  let fixture: ComponentFixture<MobileFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MobileFooterComponent,
        ApplyButtonComponent,
      ],
      providers: [
        new FakeJobServiceModuleBuilder().build()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MobileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
