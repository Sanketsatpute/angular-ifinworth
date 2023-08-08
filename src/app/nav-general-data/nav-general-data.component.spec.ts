import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGeneralDataComponent } from './nav-general-data.component';

describe('NavGeneralDataComponent', () => {
  let component: NavGeneralDataComponent;
  let fixture: ComponentFixture<NavGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGeneralDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
