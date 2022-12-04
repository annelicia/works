import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipItemComponent } from './chip-item.component';

describe('ChipItemComponent', () => {
  let component: ChipItemComponent;
  let fixture: ComponentFixture<ChipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return correct selected class.', () => {
    // Arrange.
    const component = new ChipItemComponent();
    component.selected = true;

    // Act.
    const className = component.getClass();

    // Assert.
    expect(className).toBe('chip-item chip-item-selected');
  });

  it('should return correct unselected class.', () => {
    // Arrange.
    const component = new ChipItemComponent();
    component.selected = false;

    // Act.
    const className = component.getClass();

    // Assert.
    expect(className).toBe('chip-item');
  });

  it('should render button with text provided.', () => {
    // Arrange.
    component.text = 'eunice';

    // Act.
    fixture.detectChanges();
    const element = fixture.nativeElement; // <app-chip-item />

    // Assert.
    expect(element.textContent).toBe('eunice');
  });
});
