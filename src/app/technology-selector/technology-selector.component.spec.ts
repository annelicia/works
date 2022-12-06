import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipItemComponent } from '../common/components/chip-item/chip-item.component';
import { ChipSelectorComponent } from '../common/components/chip-selector/chip-selector.component';
import { FakeJobServiceModuleBuilder } from '../common/services/job/job.service.fake';
import { TechnologySelectorComponent } from './technology-selector.component';

describe('TechnologySelectorComponent', () => {
  let component: TechnologySelectorComponent;
  let fixture: ComponentFixture<TechnologySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TechnologySelectorComponent,
        ChipSelectorComponent,
        ChipItemComponent,
      ],
      providers: [
        new FakeJobServiceModuleBuilder().build()
      ]
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
