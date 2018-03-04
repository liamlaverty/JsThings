import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
