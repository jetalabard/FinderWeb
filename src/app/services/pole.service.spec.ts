import { TestBed, inject } from '@angular/core/testing';

import { PoleService } from './pole.service';

describe('PoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoleService]
    });
  });

  it('should be created', inject([PoleService], (service: PoleService) => {
    expect(service).toBeTruthy();
  }));
});
