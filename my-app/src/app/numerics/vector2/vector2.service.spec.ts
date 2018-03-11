import { TestBed, inject } from '@angular/core/testing';

import { Vector2Service } from './vector2.service';

describe('Vector2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Vector2Service]
    });
  });

  it('should be created', inject([Vector2Service], (service: Vector2Service) => {
    expect(service).toBeTruthy();
  }));
});
