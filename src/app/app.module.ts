import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChipItemComponent } from './common/components/chip-item/chip-item.component';
import { ChipSelectorComponent } from './common/components/chip-selector/chip-selector.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';
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
import { SafeHtmlPipe } from './common/pipes/safehtml';

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
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
