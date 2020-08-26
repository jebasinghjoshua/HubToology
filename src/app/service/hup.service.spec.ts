import { TestBed } from '@angular/core/testing';

import { HupService } from './hup.service';

describe('HupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HupService = TestBed.get(HupService);
    expect(service).toBeTruthy();
  });
});
