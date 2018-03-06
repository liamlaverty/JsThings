import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCanvasComponent } from './parent-canvas/parent-canvas.component';
import { BrowserService } from './browser.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentCanvasComponent],
  providers: [BrowserService]
})
export class ViewportModule { }
