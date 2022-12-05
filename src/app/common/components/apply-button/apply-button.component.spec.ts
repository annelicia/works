import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyButtonComponent } from './apply-button.component';

describe('ApplyButtonComponent', () => {
  let component: ApplyButtonComponent;
  let fixture: ComponentFixture<ApplyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApplyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct className when icon is "arrow".', () => {
    // Arrange.
    const component = new ApplyButtonComponent();
    component.icon = 'arrow';

    // Act.
    const className = component.getClassName();

    // Assert.
    expect(className).toBe('apply-button apply-button-transition');
  });

  it('should return correct className when icon is undefined.', () => {
    // Arrange.
    const component = new ApplyButtonComponent();
    component.icon = undefined;

    // Act.
    const className = component.getClassName();

    // Assert.
    expect(className).toBe('apply-button');
  });
});
