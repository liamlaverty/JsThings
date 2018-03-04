import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Rectangle } from '../rectangle';
import { RECTANGLES } from '../mock-rectangles';

@Component({
  selector: 'app-key-up-component',
  templateUrl: './key-up-component.component.html',
  styleUrls: ['./key-up-component.component.css']
})
export class KeyUpComponentComponent implements AfterViewInit  {

  rectangles: Rectangle[];
  distanceToMovePerInput: number;
  character: Rectangle;
  // TODO use this instead of the below junk
  // values = 'vals:';
  // onKey(event: any) {
  //   console.log('key was ' + event.target.value);
  //   this.values += event.target.value + '|';
  // }

  constructor() {
    this.rectangles = RECTANGLES;
    this.character = this.findCharacter();
    this.distanceToMovePerInput = 1;
  }

  tick(): void {
    console.log('ticking');
   requestAnimationFrame(() => {
      this.tick();
   });
    const keyPress = document.addEventListener('keydown', this.keyDownHappened);

  }

  ngAfterViewInit(): void {
    this.tick();
  }
  moveOnAxisX(distance: number): void {
    console.log('moving on axis x');
    this.character.x += distance;
  }

  findCharacter(): Rectangle {
    for (const singleRectangle of this.rectangles) {
      if (singleRectangle.name === 'person') {
        console.log('found person');
        return singleRectangle;
      } else {
        console.log('couldnt find person');
      }
    }
    return null;
  }

  keyDownHappened(event): void {
     console.log('event pressed was code [' + event.keyCode + ']');
     let message = '';
     if (event.keyCode === 65) {
       message += 'left';
        this.moveOnAxisX(this.distanceToMovePerInput);
     }
     if (event.keyCode === 68) {
       message += 'right';
       this.moveOnAxisX(this.distanceToMovePerInput);
     }
     if (event.keyCode === 87) {
       message += 'up';
     }
     if (event.keyCode === 83) {
       message += 'down';
     }
     message = 'key [' + message + '] was pressed';
     console.log(message);
  }
}
