import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipItemComponent } from './common/components/chip-item/chip-item.component';
import { ChipSelectorComponent } from './common/components/chip-selector/chip-selector.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { JobItemComponent } from './job/job-list/job-item/job-item.component';
import { IconLabelComponent } from './common/components/icon-label/icon-label.component';
import { TagComponent } from './common/components/tag/tag.component';
import { ApplyButtonComponent } from './common/components/apply-button/apply-button.component';
import { StepComponent } from './common/components/step/step.component';
import { JobDetailDescriptionComponent } from './job/job-detail/job-detail-description/job-detail-description.component';
import { JobDetailFooterComponent } from './job/job-detail/job-detail-footer/job-detail-footer.component';
import { JobDetailHeaderComponent } from './job/job-detail/job-detail-header/job-detail-header.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipItemComponent,
    ChipSelectorComponent,
    TechnologySelectorComponent,
    JobComponent,
    JobListComponent,
    JobDetailComponent,
    JobItemComponent,
    IconLabelComponent,
    TagComponent,
    ApplyButtonComponent,
    JobDetailHeaderComponent,
    JobDetailFooterComponent,
    StepComponent,
    JobDetailDescriptionComponent,
    MobileFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
