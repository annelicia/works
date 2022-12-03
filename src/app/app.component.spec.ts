import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChipItemComponent } from './chip-item/chip-item.component';
import { ChipSelectorComponent } from './chip-selector/chip-selector.component';
import { TechnologySelectorComponent } from './technology-selector/technology-selector.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TechnologySelectorComponent,
        ChipSelectorComponent,
        ChipItemComponent,
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
