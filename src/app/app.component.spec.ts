import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { ChipItemComponent } from './chip-item/chip-item.component';
import { ChipSelectorComponent } from './chip-selector/chip-selector.component';
import { JobDetailDescriptionComponent } from './job-detail/job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job-detail/job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job-detail/job-detail-header/job-detail-header.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobComponent } from './job/job.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
