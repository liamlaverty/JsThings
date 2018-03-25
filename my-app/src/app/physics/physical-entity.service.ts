import { Injectable } from '@angular/core';
import { PhysicalEntity } from './models/physical-entity.model';
import { GameRectangle } from '../models/game-rectangle';

@Injectable()
export class PhysicalEntityService {

  physicalEntities: PhysicalEntity[];

  constructor() {
    console.log('PhysicalEntityService constructor: creating physical entity arr');
    this.physicalEntities = new Array<PhysicalEntity>();

  }

  TickOnPhysicalEntities() {
    // console.log('ticking on physical entities');

    let tickChecks = 0;

    for (let x = 0; x < this.physicalEntities.length; x++ ) {
      for (let y = 0; y < this.physicalEntities.length; y++ ) {
        tickChecks++;
      }
    }
    console.log('ticking would check [' + tickChecks +  '] items');

  }

  RegisterPhysicalEntity(physicalEntity: GameRectangle) {
    console.log('registering single physical entity');
    if (this.EntityExists(physicalEntity.name) === null) {
      console.log('adding new physical entity');

      this.physicalEntities.push(physicalEntity as PhysicalEntity);
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
