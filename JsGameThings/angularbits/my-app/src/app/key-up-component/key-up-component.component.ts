import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Rectangle } from '../rectangle';
import { RECTANGLES } from '../mock-rectangles';
// import { KeyboardEvent } from '@angular/core';


@Component({
  selector: 'app-key-up-component',
  templateUrl: './key-up-component.component.html',
  styleUrls: ['./key-up-component.component.css']
})
export class KeyUpComponentComponent implements AfterViewInit {

  rectangles: Rectangle[];
  distanceToMovePerInput: number;
  character: Rectangle;
  boxcontent: string;
  currentKeyDown: string;
  // TODO use this instead of the below junk
  // values = 'vals:';
  // onKey(event: any) {
  //   console.log('key was ' + event.target.value);
  //   this.values += event.target.value + '|';
  // }

  constructor() {
    this.rectangles = RECTANGLES;
    this.character = this.findCharacter();
    this.distanceToMovePerInput = 5;
    this.currentKeyDown = '';
  }


  onKey(value: KeyboardEvent) {
    this.boxcontent = '';
    console.log('key');
    this.keyDownHappened(value);
  }

  ngAfterViewInit(): void {
    // const keyPress = document.addEventListener('keydown', this.keyDownHappened);
  }
  moveOnAxisX(distance: number): void {
    // console.log('moving on axis x');
    this.character.x += distance;
  }

  moveOnAxisY(distance: number): void {
    // console.log('moving on axis y');
    this.character.y += distance;
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

  keyDownHappened(event: KeyboardEvent): void {
    this.currentKeyDown = null;
    this.currentKeyDown = (<HTMLInputElement>event.target).value;
    if (this.currentKeyDown.length) {
       console.log('event pressed was code [' + event + ']');
      let message = '';
      if (this.currentKeyDown === 'a') {
        message += 'left';
        this.moveOnAxisX(-this.distanceToMovePerInput);
      }
      if (this.currentKeyDown === 'd') {
        message += 'right';
        this.moveOnAxisX(this.distanceToMovePerInput);
      }
      if (this.currentKeyDown === 'w') {
        message += 'up';
        this.moveOnAxisY(-this.distanceToMovePerInput);
      }
      if (this.currentKeyDown === 's') {
        message += 'down';
        this.moveOnAxisY(this.distanceToMovePerInput);
      }
      if (this.currentKeyDown === ' ') {
        console.log('JUMP!');
      }
      // message = 'key [' + message + '] was pressed';
      // console.log(message);
    }
  }
}
