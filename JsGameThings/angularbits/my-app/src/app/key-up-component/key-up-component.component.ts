import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-component',
  templateUrl: './key-up-component.component.html',
  styleUrls: ['./key-up-component.component.css']
})
export class KeyUpComponentComponent implements AfterViewInit  {


  // TODO use this instead of the below junk
  // values = 'vals:';
  // onKey(event: any) {
  //   console.log('key was ' + event.target.value);
  //   this.values += event.target.value + '|';
  // }

  constructor() { }

  ngAfterViewInit() {
    const keyPress = document.addEventListener('keydown', this.keyDownHappened);

  }

  keyDownHappened(event) {
     console.log('event pressed was code [' + event.keyCode + ']');
     let message = '';
     if (event.keyCode === 37) {
       message += 'left';
     }
     if (event.keyCode === 39) {
       message += 'right';
     }
     if (event.keyCode === 38) {
       message += 'up';
     }
     if (event.keyCode === 40) {
       message += 'down';
     }
     message = 'key [' + message + '] was pressed';
     console.log(message);
  }

}
