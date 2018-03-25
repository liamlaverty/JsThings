import { Injectable } from '@angular/core';
import { PhysicalEntity } from './models/physical-entity.model';
import { GameRectangle } from '../models/game-rectangle';
import { MathHelperService } from '../numerics/math-helper/math-helper.service';

@Injectable()
export class PhysicalEntityService {

  physicalEntities: PhysicalEntity[];
  mathHelperService: MathHelperService;

  constructor() {
    console.log('PhysicalEntityService constructor: creating physical entity arr');
    this.physicalEntities = new Array<PhysicalEntity>();
    this.mathHelperService = new MathHelperService();
  }

  TickOnPhysicalEntities() {
    // console.log('ticking on physical entities');

    let tickChecks = 0;
    let cols = 0;
    let objCount = 0;
    for (let x = 0; x < this.physicalEntities.length; x++ ) {
      objCount++;
      const leftAabb = this.mathHelperService.GetAABB(
        this.physicalEntities[x].position,
        this.physicalEntities[x].size
      );
      // if (this.physicalEntities[x].name === 'person') {
      //   console.log('on player [' + JSON.stringify(leftAabb) + ']');
      // }
      for (let y = 0; y < this.physicalEntities.length; y++ ) {
        tickChecks++;
        // if ()
        const rightAabb = this.mathHelperService.GetAABB(
          this.physicalEntities[y].position,
          this.physicalEntities[y].size
        );
        if (this.mathHelperService.AabbVsAabb(leftAabb, rightAabb)) {
          cols++;
        }
      }
    }
    console.log('collided [' + cols + '] | objs: [' + objCount + '] | chekced [' + tickChecks
    +  ']');


  }

  RegisterPhysicalEntity(physicalEntity: GameRectangle) {
    console.log('registering single physical entity');
    if (this.EntityExists(physicalEntity.name) === null) {
      console.log('adding new physical entity');

      this.physicalEntities.push(<PhysicalEntity>physicalEntity);
    } else {
      console.log('entity [' + physicalEntity.name + '] already exists');
    }
  }

  RegisterPhysicalEntityCollection(physicalEntitySet: Array<GameRectangle>) {
    console.log('registering set of physical entities');
    for (let i = 0; i < physicalEntitySet.length; i++) {
      this.RegisterPhysicalEntity(physicalEntitySet[i]);
    }
  }


  private EntityExists(name: string): PhysicalEntity {
    for (let i = 0; i < this.physicalEntities.length; i++) {
      if (this.physicalEntities[i].name === name) {
        return this.physicalEntities[i];
      }
    }
    return null;
  }
}
