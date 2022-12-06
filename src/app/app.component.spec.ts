import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ApplyButtonComponent } from './common/components/apply-button/apply-button.component';
import { ChipItemComponent } from './common/components/chip-item/chip-item.component';
import { ChipSelectorComponent } from './common/components/chip-selector/chip-selector.component';
import { FakeJobServiceModuleBuilder } from './common/services/job/job.service.fake';
import { JobDetailDescriptionComponent } from './job/job-detail/job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job/job-detail/job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job/job-detail/job-detail-header/job-detail-header.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobComponent } from './job/job.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MobileFooterComponent,
        TechnologySelectorComponent,
        ChipSelectorComponent,
        ChipItemComponent,
        JobComponent,
        JobListComponent,
        JobDetailComponent,
        JobDetailHeaderComponent,
        JobDetailDescriptionComponent,
        JobDetailFooterComponent,
        ApplyButtonComponent,
      ],
      providers: [
        new FakeJobServiceModuleBuilder().build()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'works-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('works-app');
  });

});
