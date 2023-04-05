class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render(color) {
    return `<rect x="50" y="20" width="150" height="150" fill="${color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render(color) {
    return `<circle cx="50" cy="50" r="40" fill="${color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render(color) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
  }
}

class Logo{
    constructor(text, textColor, shape);
    this.text = text
}

module.exports = { Triangle, Circle, Square };
