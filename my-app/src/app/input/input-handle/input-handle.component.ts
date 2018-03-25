import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-handle',
  templateUrl: './input-handle.component.html',
  styleUrls: ['./input-handle.component.css']
})
export class InputHandleComponent implements OnInit {
  static validKeys: Array<string> = ['w', 'a', 's', 'd', ' '];

  currentlyDown: string[];

  newPressOnly: boolean;
  key: string;
  keyPressed: boolean;

  // @Output()
  // inputActionHappened: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    // this.validKeys = ['w', 'a', 's', 'd', ' '];
    this.currentlyDown = new Array<string>();
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPressed = true;
    this.key = event.key;
    const myKey = event.key;
    this.pushToCurrentKeys(myKey);
    if (this.checkKeyPressValid()) {
      this.preventDefaults(event);
      this.handleKeyPress();
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventFinished(event: KeyboardEvent) {
    this.keyPressed = false;
    const myKey = event.key;
    this.popFromCurrentKeys(myKey);
  }

  checkCurrentKeysForInput(input: string) {
    const exists = this.currentlyDown.indexOf(input) > -1;
    return exists;
  }
  pushToCurrentKeys(input: string) {
    if (!this.checkCurrentKeysForInput(input)) {
      // console.log('adding [' + input + '] to current');
      this.currentlyDown.push(input);
    }
  }
  popFromCurrentKeys(input: string) {
    if (this.checkCurrentKeysForInput(input)) {
      // console.log('removing  [' + input + '] to current');
      const locationInArr = this.currentlyDown.indexOf(input);

      this.currentlyDown.splice(locationInArr, 1);

      // delete this.currentlyDown[locationInArr];
    }
    // console.log('input arr is now [' + this.currentlyDown.length + '] long. contents:[' + JSON.stringify(this.currentlyDown) + ']' );
  }
  preventDefaults(e) {
    e.preventDefault();
  }

  handleKeyPress() {
    // console.log('key pressed at [' + this.key + ']');
    // this.inputActionHappened.emit(this.key);
  }

  checkKeyPressValid() {
    if (InputHandleComponent.validKeys.includes(this.key)) {
      return true;
    }
    return false;
  }

  runButton() {
    console.log('starting input handle');
  }
}
