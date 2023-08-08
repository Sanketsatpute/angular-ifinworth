import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldBankDataComponent } from './world-bank-data.component';

describe('WorldBankDataComponent', () => {
  let component: WorldBankDataComponent;
  let fixture: ComponentFixture<WorldBankDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldBankDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldBankDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
