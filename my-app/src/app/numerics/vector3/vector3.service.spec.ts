import { TestBed, inject } from '@angular/core/testing';

import { Vector3Service } from './vector3.service';

describe('Vector3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Vector3Service]
    });
  });

  it('should be created', inject([Vector3Service], (service: Vector3Service) => {
    expect(service).toBeTruthy();
  }));
});
