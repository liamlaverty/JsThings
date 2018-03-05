import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-input-handle',
  templateUrl: './input-handle.component.html',
  styleUrls: ['./input-handle.component.css']
})
export class InputHandleComponent implements OnInit {

  newPressOnly: boolean;
  key: string;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('keypress');
    this.key = event.key;

    console.log('key event was ['  + this.key + ']');
  }
}
