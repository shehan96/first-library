import { TestBed } from '@angular/core/testing';

import { ShehanLibService } from './shehan-lib.service';

describe('ShehanLibService', () => {
  let service: ShehanLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShehanLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
