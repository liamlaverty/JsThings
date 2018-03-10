import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCanvasComponent } from './parent-canvas/parent-canvas.component';
import { BrowserService } from './browser.service';
import { ChildCanvasComponent } from './child-canvas/child-canvas.component';
import { ChildCanvasService } from './child-canvas/services/child-canvas.service';
import { SimpleCanvasComponent } from './simple-canvas/simple-canvas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentCanvasComponent, ChildCanvasComponent, ChildCanvasComponent, SimpleCanvasComponent],
  entryComponents: [ChildCanvasComponent],
  providers: [BrowserService, ChildCanvasService],
  exports: [ ParentCanvasComponent, ChildCanvasComponent ]
})
export class ViewportModule { }
