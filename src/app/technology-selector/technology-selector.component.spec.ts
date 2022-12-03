import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySelectorComponent } from './technology-selector.component';

describe('TechnologySelectorComponent', () => {
  let component: TechnologySelectorComponent;
  let fixture: ComponentFixture<TechnologySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
