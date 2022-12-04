import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipItemComponent } from './chip-item/chip-item.component';
import { ChipSelectorComponent } from './chip-selector/chip-selector.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobItemComponent } from './job-item/job-item.component';
import { IconLabelComponent } from './icon-label/icon-label.component';
import { TagComponent } from './tag/tag.component';
import { ApplyButtonComponent } from './apply-button/apply-button.component';
import { JobDetailHeaderComponent } from './job-detail-header/job-detail-header.component';

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
