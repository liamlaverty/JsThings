import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostListener } from '@angular/core';
import { InputStateComponent } from './input-state/input-state.component';
import { InputHandleComponent } from './input-handle/input-handle.component';

@NgModule({
  imports: [
    CommonModule
    ],
  declarations: [InputStateComponent, InputHandleComponent],
  exports: [InputHandleComponent]
})
export class InputModule {
}
