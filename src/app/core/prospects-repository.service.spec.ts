import { TestBed } from '@angular/core/testing';

import { ProspectsRepositoryService } from './prospects-repository.service';

describe('ProspectsRepositoryService', () => {
  let service: ProspectsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
