import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicalEntityService } from './physical-entity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ PhysicalEntityService ],
  declarations: []
})
export class PhysicsModule { }
