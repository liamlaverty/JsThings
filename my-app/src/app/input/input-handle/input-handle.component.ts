import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-handle',
  templateUrl: './input-handle.component.html',
  styleUrls: ['./input-handle.component.css']
})
export class InputHandleComponent implements OnInit {
  static validKeys: Array<string> = ['w', 'a', 's', 'd', ' '];

  newPressOnly: boolean;
  key: string;
  keyPressed: boolean;

  // @Output()
  // inputActionHappened: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    // this.validKeys = ['w', 'a', 's', 'd', ' '];
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPressed = true;
    this.key = event.key;
    if (this.checkKeyPressValid()) {
      this.handleKeyPress();
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventFinished(event: KeyboardEvent) {
    this.keyPressed = false;
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
