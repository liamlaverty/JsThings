import { Injectable } from '@angular/core';
import { PhysicalEntity } from './models/physical-entity.model';
import { GameRectangle } from '../models/game-rectangle';
import { MathHelperService } from '../numerics/math-helper/math-helper.service';
import { Vector2 } from '../numerics/vector2/vector2.model';
import { Rectangle } from '../models/rectangle';
import { QuadTree } from './models/quad-tree.model';

@Injectable()
export class PhysicalEntityService {

  physicalEntities: PhysicalEntity[];
  mathHelperService: MathHelperService;
  private worldBounds: Vector2;
  private quadTree: QuadTree;

  constructor(worldBounds?: Vector2) {
    if (worldBounds !== null && worldBounds !== undefined) {
      this.worldBounds = worldBounds;
      console.log('world bounds are x[' + this.worldBounds.x + '] y[' + this.worldBounds.y + ']');
      this.BuildQuadTree();
    }
    console.log('PhysicalEntityService constructor: creating physical entity arr');
    this.physicalEntities = new Array<PhysicalEntity>();
    this.mathHelperService = new MathHelperService();
  }

  BuildQuadTree() {
    console.log('building sector list');
    const worldBoundAsRectangle = new Rectangle();
    worldBoundAsRectangle.position = new Vector2(0, 0);
    worldBoundAsRectangle.size = this.worldBounds;
    this.quadTree = new QuadTree(0, worldBoundAsRectangle);
  }

  TickOnPhysicalEntities() {
    this.GreedyCheckIntersection();
    if ((this.quadTree !== null) && (this.quadTree !== undefined)) {
      // this.RebuildQuadTree();
    } else {
      console.log('quad was empty or undefined');
    }

    // this.GreedyApplyGravity(0.1);
  }

  RebuildQuadTree() {
    // console.log('rebuilding quad tree');
    this.quadTree.Clear(0);

    for (let x = 0; x < this.physicalEntities.length; x++) {
      this.quadTree.Insert(this.physicalEntities[x] as Rectangle);
    }

  }


  GreedyCheckIntersection() {
    let tickChecks = 0;
    let cols = 0;
    let objCount = 0;
    for (let x = 0; x < this.physicalEntities.length; x++) {
      objCount++;

      const leftAabb = this.mathHelperService.GetAABB(
        this.physicalEntities[x].position,
        this.physicalEntities[x].size
      );
      // if (this.physicalEntities[x].name === 'person') {
      //   console.log('on player [' + JSON.stringify(leftAabdb) + ']');
      // }
      for (let y = x + 1; y < this.physicalEntities.length; y++) {
        tickChecks++;
        // if ()
        const rightAabb = this.mathHelperService.GetAABB(
          this.physicalEntities[y].position,
          this.physicalEntities[y].size
        );
        if (this.mathHelperService.AabbVsAabb(leftAabb, rightAabb)) {
          cols++;
          this.physicalEntities[x].overrideColor = '#fff';
          this.physicalEntities[y].overrideColor = '#fff';
          this.EscapeCollision(this.physicalEntities[x], this.physicalEntities[y]);
        }
      }
    }
    // console.log('collided [' + cols + '] | objs: [' + objCount + '] | chekced [' + tickChecks
    // +  ']');
  }

  EscapeCollision(left: GameRectangle, right: GameRectangle) {
    //  if (left.name === 'person' || right.name === 'person') {
    //    console.log('escaping a collision between [' + left.name + '] and [' + right.name + ']');
    //  }
    //   left.force = new Vector2(0, 0);
    //   right.force = new Vector2(0, 0);
  }


  GreedyApplyGravity(gravFoce: number) {

    for (let x = 0; x < this.physicalEntities.length; x++) {
      if (this.physicalEntities[x].isStaticObject !== true) {
        this.physicalEntities[x].force.y -= gravFoce * 1;

        this.physicalEntities[x].force.y = this.mathHelperService.Lerp(this.physicalEntities[x].force.y, 0, -0.075);
        this.physicalEntities[x].position.y -= this.physicalEntities[x].force.y;
      }
    }
  }

  // moves an entity
  MoveEntity(entity: GameRectangle, force: Vector2) {
    force.x = this.mathHelperService.Lerp(-force.x, 0, 0.75);
    force.y = this.mathHelperService.Lerp(-force.y, 0, 0.75);

    entity.position.x += force.x;
    entity.position.y += force.y;
  }

  RegisterPhysicalEntity(physicalEntity: GameRectangle) {
    if (this.EntityExists(physicalEntity.name) === null) {
      console.log('adding new physical entity [' + physicalEntity.name + ']');
      physicalEntity.force = new Vector2(0, 0);
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
