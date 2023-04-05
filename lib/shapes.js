class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color){
        this.color = color;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    renderSquare(color) {
        return `<rect x="50" y="20" width="150" height="150 fill="">`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

}

module.exports = Square, Circle, Triangle