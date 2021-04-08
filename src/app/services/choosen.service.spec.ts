import { TestBed } from '@angular/core/testing';

import { ChoosenService } from './choosen.service';

describe('ChoosenService', () => {
  let service: ChoosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
