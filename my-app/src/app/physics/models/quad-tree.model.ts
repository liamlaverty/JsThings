import { Rectangle } from '../../models/rectangle';
import { Vector2 } from '../../numerics/vector2/vector2.model';

export class QuadTree {
    private MAX_OBJ = 10;
    private MAX_LVL = 5;

    private level: number;
    private objects: Array<Rectangle>;
    private bounds: Rectangle;
    private nodes: QuadTree[];

    constructor(pLevel: number, pBounds: Rectangle) {
        this.level = pLevel;
        this.objects = new Array<Rectangle>();
        this.bounds = pBounds;
        this.nodes = new QuadTree[4];
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
    Clear(): void {
        this.objects = new Array<Rectangle>();

        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] !== null) {
                this.nodes[i].Clear();
                this.nodes[i] = null;
            }
        }
    }

    Insert(thisRectangle: Rectangle): void {
        if (this.nodes[0] !== null) {
            const index: number = this.getIndex(thisRectangle);

            if (index !== -1) {
                this.nodes[index].Insert(thisRectangle);
                return;
            }
        }

        this.objects.push(thisRectangle);

        if (this.objects.length > this.MAX_OBJ && this.level < this.MAX_LVL) {
            if (this.nodes[0] === null) {
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
        const subWidth: number = Math.floor(this.bounds.GetWidth() / 2);
        const subHeight: number = Math.floor(this.bounds.GetHeight() / 2);
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
        const verticalMidpoint: number = this.bounds.position.x + (this.bounds.GetWidth() / 2);
        const horizontalMidpont: number = this.bounds.position.y + (this.bounds.GetHeight() / 2);

        // fits in the top quadrants?
        const topQuadrant: boolean = (thisRectangle.position.y < horizontalMidpont &&
            thisRectangle.position.y + thisRectangle.GetHeight() < horizontalMidpont);

        // fits in the bottom quadrants?
        const bottomQuadrant: boolean = (thisRectangle.position.y > horizontalMidpont);

        // can fit within the left quadrants?
        if (thisRectangle.position.x < verticalMidpoint &&
            (thisRectangle.position.x + thisRectangle.GetWidth()) < verticalMidpoint) {
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
