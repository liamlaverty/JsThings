import { TestBed, inject } from '@angular/core/testing';

import { PhysicalEntityService } from './physical-entity.service';

describe('PhysicalEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicalEntityService]
    });
  });

  it('should be created', inject([PhysicalEntityService], (service: PhysicalEntityService) => {
    expect(service).toBeTruthy();
  }));
});
