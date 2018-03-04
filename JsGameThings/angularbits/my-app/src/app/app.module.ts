import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KeyUpComponentComponent } from './key-up-component/key-up-component.component';
import { CanvasAreaComponent } from './canvas-area/canvas-area.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponentComponent,
    CanvasAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
