import { Injectable } from '@angular/core';
import { MainCharacter, MAINCHARACTER } from './main-character.model';
import { GameRectangle } from '../../models/game-rectangle';
import { PLAYER } from '../../mock-rectangles';
import { MathHelperService } from '../../numerics/math-helper/math-helper.service';

@Injectable()
export class MainCharacterService {

  private mainCharacter: MainCharacter;

  // private mainCharacterRect: GameRectangle[];

  constructor() {
    // this.mainCharacterRect = <GameRectangle[]>JSON.parse(JSON.stringify(PLAYER));
    this.mainCharacter = MAINCHARACTER;
    console.log('main character service constructor');

  }


  // Update(gameTime: number): void {
  //   this.mainCharacter.force.x = this.mathHelperService.Lerp(-this.mainCharacter.force.x, 0, 1);
  //   this.mainCharacter.force.y = this.mathHelperService.Lerp(-this.mainCharacter.force.y, 0, 1);
  // }

  SetMainCharacter() {
    console.log('setting main character');
  }

  GetMainCharacter(): MainCharacter {
    return this.mainCharacter;
  }
}
