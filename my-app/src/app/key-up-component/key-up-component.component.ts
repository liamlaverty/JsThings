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
    this.character = this.findCharacter();
    this.distanceToMovePerInput = 5;
    this.currentKeyDown = '';
    // this.mainCharacterService.GetMainCharacter();
    // this.mainCharacter = this.mainCharacterService.GetMainCharacter();
  }
  inputTick(): void {
     this.checkCurrentKey();
  }

   ngAfterViewInit(): void {
     console.log('ngAfterViewInit keyupcomponent');
   }
  checkCurrentKey() {
    if (this.inputHandleComponent.key !== undefined && this.inputHandleComponent.keyPressed) {
      // console.log('input key is [' + this.inputHandleComponent.key + ']');
      this.takeActionOnKeyPress(this.inputHandleComponent.key);
    }
  }


  moveOnAxisX(distance: number): void {
    // console.log('moving on axis x');
    this.character.position.x += distance;
  }

  moveOnAxisY(distance: number): void {
    // console.log('moving on axis y');
    this.character.position.y += distance;
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
       if (key === ' ') {
         console.log('JUMP!');
       }
  }

  // keyDownHappened(event: KeyboardEvent): void {
  //   this.currentKeyDown = null;
  //   this.currentKeyDown = (<HTMLInputElement>event.target).value;
  //   if (this.currentKeyDown.length) {
  //      console.log('event pressed was code [' + event + ']');
  //     let message = '';
  //     if (this.currentKeyDown === 'a') {
  //       message += 'left';
  //       this.moveOnAxisX(-this.distanceToMovePerInput);
  //     }
  //     if (this.currentKeyDown === 'd') {
  //       message += 'right';
  //       this.moveOnAxisX(this.distanceToMovePerInput);
  //     }
  //     if (this.currentKeyDown === 'w') {
  //       message += 'up';
  //       this.moveOnAxisY(-this.distanceToMovePerInput);
  //     }
  //     if (this.currentKeyDown === 's') {
  //       message += 'down';
  //       this.moveOnAxisY(this.distanceToMovePerInput);
  //     }
  //     if (this.currentKeyDown === ' ') {
  //       console.log('JUMP!');
  //     }
  //     // message = 'key [' + message + '] was pressed';
  //     // console.log(message);
  //   }
  // }
}
