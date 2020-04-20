import { TestBed } from '@angular/core/testing';

import { DraftOrderService } from './draft-order.service';

describe('DraftOrderService', () => {
  let service: DraftOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
