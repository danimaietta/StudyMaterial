// Shape class
class Shape {
    area() {
        throw new Error('Method not implemented');
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Usage
const circle = new Circle(5); // Create a Circle instance
const rectangle = new Rectangle(4, 6); // Create a Rectangle instance

console.log(circle.area()); // Output: 78.54 (approx)
console.log(rectangle.area()); // Output: 24