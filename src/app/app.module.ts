import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipItemComponent } from './chip-item/chip-item.component';
import { ChipSelectorComponent } from './chip-selector/chip-selector.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipItemComponent,
    ChipSelectorComponent,
    TechnologySelectorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
