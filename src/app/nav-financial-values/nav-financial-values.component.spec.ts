import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFinancialValuesComponent } from './nav-financial-values.component';

describe('NavFinancialValuesComponent', () => {
  let component: NavFinancialValuesComponent;
  let fixture: ComponentFixture<NavFinancialValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFinancialValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFinancialValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
