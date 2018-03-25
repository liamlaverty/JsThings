import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { GameRectangle } from '../models/game-rectangle';
import { RECTANGLES, PLAYER } from '../mock-rectangles';
import { InputModule } from '../input/input.module';
import { InputHandleComponent } from '../input/input-handle/input-handle.component';
import { MainCharacterService } from '../game/MainCharacter/main-character.service';
import { MainCharacter } from '../game/MainCharacter/main-character.model';


// import { KeyboardEvent } from '@angular/core';


@Component({
  selector: 'app-key-up-component',
  templateUrl: './key-up-component.component.html',
  styleUrls: ['./key-up-component.component.css'],
  providers: [ MainCharacterService]
})
export class KeyUpComponentComponent implements AfterViewInit {
  @ViewChild(InputHandleComponent)
  private inputHandleComponent: InputHandleComponent;

  rectangles: GameRectangle[];
  distanceToMovePerInput: number;
  character: GameRectangle;
  boxcontent: string;
  currentKeyDown: string;
  // mainCharacterService: MainCharacterService;
  mainCharacter: MainCharacter;

  constructor(public mainCharacterService: MainCharacterService ) {
    this.rectangles = PLAYER;
    this.mainCharacter = mainCharacterService.GetMainCharacter();
    this.character = this.findCharacter();
    this.distanceToMovePerInput = 60;
    this.currentKeyDown = '';
  }
  inputTick(): void {
    this.checkCurrentKeySet();
  }

   ngAfterViewInit(): void {
     console.log('ngAfterViewInit keyupcomponent');
   }

checkCurrentKeySet() {
  if (this.inputHandleComponent.currentlyDown !== undefined && this.inputHandleComponent.currentlyDown.length > 0) {
    for (let i = 0; i < this.inputHandleComponent.currentlyDown.length; i++) {
      this.takeActionOnKeyPress(this.inputHandleComponent.currentlyDown[i]);
    }
  }
}

  // checkCurrentKey() {
  //   if (this.inputHandleComponent.key !== undefined && this.inputHandleComponent.keyPressed) {
  //     console.log('input key is [' + this.inputHandleComponent.key + ']');
  //     this.takeActionOnKeyPress(this.inputHandleComponent.key);
  //   }
  // }


  moveOnAxisX(distance: number): void {
     // console.log('moving on axis x');
    // this.character.position.x += distance;
    this.mainCharacter.force.x -= distance * 1;
  }

  moveOnAxisY(distance: number): void {
    // console.log('moving on axis y');
    // this.character.position.y += distance;

    this.mainCharacter.force.y -= distance * 1;
  }

  findCharacter(): GameRectangle {
    for (const singleRectangle of this.rectangles) {
      if (singleRectangle.name === 'person') {
        console.log('found person');
        return singleRectangle;
      } else {
        console.log('couldn\'t find person');
      }
    }
    return null;
  }

  takeActionOnKeyPress(key: string) {
    if (key === 'a') {
         this.moveOnAxisX(-this.distanceToMovePerInput);
       }
       if (key === 'd') {
         this.moveOnAxisX(this.distanceToMovePerInput);
       }
       if (key === 'w') {
         this.moveOnAxisY(-this.distanceToMovePerInput);
       }
       if (key === 's') {
         this.moveOnAxisY(this.distanceToMovePerInput);
       }
       if (key === ' ' ) {
         console.log('JUMP!');
         this.moveOnAxisY(-this.distanceToMovePerInput * 3);
       }
  }
}
