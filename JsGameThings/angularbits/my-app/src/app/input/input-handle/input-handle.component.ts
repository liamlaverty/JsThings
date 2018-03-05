import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-handle',
  templateUrl: './input-handle.component.html',
  styleUrls: ['./input-handle.component.css']
})
export class InputHandleComponent implements OnInit {

  @Output()
   inputActionHappened: EventEmitter<string> = new EventEmitter<string>();

  newPressOnly: boolean;
  key: string;
  validKeys: Array<string>;

  constructor() {
    this.validKeys = ['w', 'a', 's', 'd', ' '];
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    if (this.checkKeyPressValid()) {
      this.handleKeyPress();
    }
  }

  handleKeyPress() {
    console.log('key pressed at [' + this.key + ']');
    // this.inputActionHappened.emit(this.key);

    this.inputActionHappened.emit(this.key);
  }


  checkKeyPressValid() {
    if (this.validKeys.includes(this.key)) {
      return true;
    }
    return false;
  }
}
