import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMacIndexComponent } from './big-mac-index.component';

describe('BigMacIndexComponent', () => {
  let component: BigMacIndexComponent;
  let fixture: ComponentFixture<BigMacIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigMacIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigMacIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
