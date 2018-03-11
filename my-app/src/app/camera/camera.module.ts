import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraService } from './camera.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CameraService],
  declarations: []
})
export class CameraModule { }
