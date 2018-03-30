import { Rectangle } from '../../models/rectangle';
import { Vector2 } from '../../numerics/vector2/vector2.model';


/*
 *
 * thorough explanation of this class is available here:
 * https://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
 *
*/
export class QuadTree {
    private MAX_OBJ = 10;
    private MAX_LVL = 5;

    private level: number;
    private objects: Array<Rectangle>;
    private bounds: Rectangle;
    private nodes: QuadTree[];

    constructor(pLevel: number, pBounds: Rectangle, maxObj: number = 10, maxLvl: number = 5) {
        this.level = pLevel;
        this.objects = new Array<Rectangle>();
        this.bounds = pBounds;
        this.nodes = new Array<QuadTree>(4);
        if (this.MAX_OBJ !== maxObj) {
            this.MAX_OBJ = maxObj;
        }
        if (this.MAX_LVL !== maxLvl) {
            this.MAX_LVL = maxLvl;
        }
    }


    retrieve(objects: Array<Rectangle>, thisRectangle: Rectangle) {
        const index: number = this.getIndex(thisRectangle);
        if (index !== -1 && this.nodes[0] !== null) {
            this.nodes[index].retrieve(objects, thisRectangle);
        }

        for (let i = 0; i < this.objects.length; i++) {
            objects.push(this.objects[i]);
        }

        return objects;
    }

    /*
    * Clears this quadtree
    */
    Clear(clearingIndexTracker: number): void {
        this.objects = new Array<Rectangle>();
        // console.log('clearing ' + clearingIndexTracker);
        for (let i = 0; i < this.nodes.length; i++) {
            let thisNode = this.nodes[i];
            if (thisNode !== null && thisNode !== undefined) {
                thisNode.Clear(clearingIndexTracker + 1);
                thisNode = null;
            } // else {
                // console.log('node at indexTracker:[' + clearingIndexTracker + '] at arr pos [ ' + i + ' ] was null.. somehow');
            // }
        }
    }

    Insert(thisRectangle: Rectangle): void {
        if (this.nodes[0] !== null && this.nodes[0] !== undefined) {
            const index: number = this.getIndex(thisRectangle);

            if (index !== -1) {
                this.nodes[index].Insert(thisRectangle);
                return;
            }
        }

        this.objects.push(thisRectangle);

        if (this.objects.length > this.MAX_OBJ && this.level < this.MAX_LVL) {
            if (this.nodes[0] === null || this.nodes[0] === undefined) {
                this.split();
            }

            let i = 0;
            while (i < this.objects.length) {
                const index: number = this.getIndex(this.objects[i]);
                if (index !== -1) {
                    this.nodes[index].Insert(this.objects[i]);
                    this.objects.splice(i, 1); // todo, check this removes it properly
                } else {
                    i++;
                }
            }
        }
    }


    /*
    * splits the current node into 4 nodes
    */
    private split(): void {
        const subWidth: number = Math.floor(this.bounds.size.x / 2);
        const subHeight: number = Math.floor(this.bounds.size.y / 2);
        const x: number = Math.floor(this.bounds.position.x);
        const y: number = Math.floor(this.bounds.position.y);
        const myLevel = this.level + 1;

        const node0Rect = this.GenerateRectangle(x + subWidth, y,
            subWidth, subHeight);

        const node1Rect = this.GenerateRectangle(x, y,
            subWidth, subHeight);

        const node2Rect = this.GenerateRectangle(x, y + subHeight,
            subWidth, subHeight);

        const node3Rect = this.GenerateRectangle(x + subWidth, y + subHeight,
            subWidth, subHeight);

        this.nodes[0] = new QuadTree(myLevel, node0Rect);
        this.nodes[1] = new QuadTree(myLevel, node1Rect);
        this.nodes[2] = new QuadTree(myLevel, node2Rect);
        this.nodes[3] = new QuadTree(myLevel, node3Rect);
    }

    /*
    *   checks which node this object belongs to. -1 means the item
    *   doesn't fit properly into a child node and it's part of the parent
    *   node
    */
    private getIndex(thisRectangle: Rectangle): number {
        let index = -1;
        const verticalMidpoint: number = this.bounds.position.x + (this.bounds.size.x / 2);
        const horizontalMidpont: number = this.bounds.position.y + (this.bounds.size.y / 2);

        // fits in the top quadrants?
        const topQuadrant: boolean = (thisRectangle.position.y < horizontalMidpont &&
            thisRectangle.position.y + thisRectangle.size.y < horizontalMidpont);

        // fits in the bottom quadrants?
        const bottomQuadrant: boolean = (thisRectangle.position.y > horizontalMidpont);

        // can fit within the left quadrants?
        if (thisRectangle.position.x < verticalMidpoint &&
            (thisRectangle.position.x + thisRectangle.size.x) < verticalMidpoint) {
            if (topQuadrant) {
                index = 1;
            } else if (bottomQuadrant) {
                index = 2;
            }
        } else if (thisRectangle.position.x > verticalMidpoint) {
            // can fit within the right quadrants?
            if (topQuadrant) {
                index = 0;
            } else if (bottomQuadrant) {
                index = 3;
            }
        }

        return index;
    }

    private GenerateRectangle(
        x: number, y: number,
        width: number, height: number): Rectangle {
        const rect = new Rectangle();
        rect.size = new Vector2(x, y);
        rect.position = new Vector2(width, height);

        return rect;
    }


}
