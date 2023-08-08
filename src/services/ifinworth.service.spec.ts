import { TestBed } from '@angular/core/testing';

import { IfinworthService } from './ifinworth.service';

describe('IfinworthService', () => {
  let service: IfinworthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfinworthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
