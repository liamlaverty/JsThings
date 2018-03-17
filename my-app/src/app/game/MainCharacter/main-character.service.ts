import { Injectable } from '@angular/core';
import { MainCharacter, MAINCHARACTER } from './main-character.model';
import { GameRectangle } from '../../models/game-rectangle';
import { PLAYER } from '../../mock-rectangles';

@Injectable()
export class MainCharacterService {

  private mainCharacter: MainCharacter;

  // private mainCharacterRect: GameRectangle[];

  constructor() {
    // this.mainCharacterRect = <GameRectangle[]>JSON.parse(JSON.stringify(PLAYER));
    this.mainCharacter = MAINCHARACTER;
    console.log('main character service constructor');

  }


  SetMainCharacter() {
    console.log('setting main character');
  }

  GetMainCharacter(): MainCharacter {
    return this.mainCharacter;
  }
}
