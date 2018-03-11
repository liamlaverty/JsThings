import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathHelperService } from './math-helper/math-helper.service';
import { Vector2Service } from './vector2/vector2.service';
import { Vector2 } from './vector2/vector2.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MathHelperService, Vector2Service, Vector2]
})
export class NumericsModule { }
