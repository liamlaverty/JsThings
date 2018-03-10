import { TestBed, inject } from '@angular/core/testing';

import { ChildCanvasService } from './child-canvas.service';

describe('ChildCanvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildCanvasService]
    });
  });

  it('should be created', inject([ChildCanvasService], (service: ChildCanvasService) => {
    expect(service).toBeTruthy();
  }));
});
