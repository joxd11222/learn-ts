// Hello to this episode! Here we will learn about classes.

class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceToOrigin(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let p = new Point(3, 4);
console.log(p.distanceToOrigin());

/*
In this example, we define a Point class with two properties x and y, both of type number. 
We also define a method distanceToOrigin() that calculates the distance from the point to the origin.

We then create a new Point object with the values 3 and 4, and print the distance to the origin using console.log().
*/

// So, that's all, in the next episode we will learn about TypeScript modules.