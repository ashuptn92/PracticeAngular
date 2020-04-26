import { TestBed } from '@angular/core/testing';

import { BakeryItemServiceService } from './bakery-item-service.service';

describe('BakeryItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BakeryItemServiceService = TestBed.get(BakeryItemServiceService);
    expect(service).toBeTruthy();
  });
});
