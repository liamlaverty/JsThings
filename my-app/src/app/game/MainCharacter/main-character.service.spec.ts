import { TestBed, inject } from '@angular/core/testing';

import { MainCharacterService } from './main-character.service';

describe('MainCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCharacterService]
    });
  });

  it('should be created', inject([MainCharacterService], (service: MainCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
