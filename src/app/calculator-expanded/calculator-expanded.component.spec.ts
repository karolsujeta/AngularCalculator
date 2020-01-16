import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorExpandedComponent } from './calculator-expanded.component';

describe('CalculatorExpandedComponent', () => {
  let component: CalculatorExpandedComponent;
  let fixture: ComponentFixture<CalculatorExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
