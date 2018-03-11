import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCanvasComponent } from './parent-canvas/parent-canvas.component';
import { BrowserService } from './browser.service';
import { ChildCanvasComponent } from './child-canvas/child-canvas.component';
import { ChildCanvasService } from './child-canvas/services/child-canvas.service';
import { SimpleCanvasComponent } from './simple-canvas/simple-canvas.component';

@NgModule({
  declarations: [ParentCanvasComponent, ChildCanvasComponent, ChildCanvasComponent],
  imports: [ CommonModule ],
  entryComponents: [ChildCanvasComponent, ParentCanvasComponent],
  providers: [BrowserService, ChildCanvasService],
  exports: [ ParentCanvasComponent ]
})
export class ViewportModule { }
