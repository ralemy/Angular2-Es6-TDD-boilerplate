/**
 * Created by ralemy on 8/23/16.
 * Sample class exporting file
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.name = "Point";
    }

    toString = ()=> `(${this.x}, ${this.y})`
}

export default Point;

