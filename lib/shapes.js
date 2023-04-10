// parent class for shapes
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  // method to set color of shape
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// child class of shape
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}

// child class of shape
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />`;
  }
}

// child class of shape
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

// parent class for product logo
class Logo {
  constructor() {
    this.textLogo = "";
    this.shapeLogo = ""
  }


  setShape(shape) {
    this.shapeLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeLogo}${this.textLogo}</svg>`
  }

  setText(text, textColor) {
  this.textLogo = `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`
  }
}
module.exports = { Triangle, Circle, Square, Logo };
