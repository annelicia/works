import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChipItemComponent } from '../chip-item/chip-item.component';
import { ChipSelectorComponent } from './chip-selector.component';

describe('ChipSelectorComponent', () => {
  let component: ChipSelectorComponent;
  let fixture: ComponentFixture<ChipSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChipSelectorComponent,
        ChipItemComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render 4 chip-items when 4 chips are provided.', () => {
    // Arrange.
    component.chips = [{
      id: '1',
      value: 'abc',
      selected: false,
    }, {
      id: '2',
      value: 'def',
      selected: false,
    }, {
      id: '3',
      value: 'ghi',
      selected: false,
    }, {
      id: '4',
      value: 'jkl',
      selected: false,
    }];

    // Act.
    fixture.detectChanges();
    const element = fixture.nativeElement;

    // Assert.
    expect(element.querySelectorAll('app-chip-item').length).toBe(4);
  });

  it('should render chip-item with correct inputs.', () => {
    // Arrange.
    component.chips = [{
      id: '1',
      value: 'abc',
      selected: false,
    }];

    // Act.
    fixture.detectChanges();
    const chipItemElement = fixture.debugElement.query(By.directive(ChipItemComponent)).componentInstance;

    // Assert.
    expect(chipItemElement.text).toBe('abc');
    expect(chipItemElement.selected).toBe(false);
  });

  it('should emit selected when chip-item clicked.', () => {
    // Arrange.
    const component = new ChipSelectorComponent();
    component.selectChip.subscribe(selectedChip => {
      // Assert.
      expect(selectedChip).toBe('123');
    })

    // Act.
    component.onClick('123');
  });
});
