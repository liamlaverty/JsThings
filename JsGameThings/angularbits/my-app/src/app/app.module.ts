import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { KeyUpComponentComponent } from './key-up-component/key-up-component.component';
import { CanvasAreaComponent } from './canvas-area/canvas-area.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GraphicsModule } from './graphics/graphics.module';
import { PhysicsModule } from './physics/physics.module';
import { LightModule } from './light/light.module';
import { ViewportModule } from './viewport/viewport.module';


@NgModule({
  declarations: [
    AppComponent,
    KeyUpComponentComponent,
    CanvasAreaComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphicsModule,
    PhysicsModule,
    LightModule,
    ViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
