// parent class for shapes
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  // function to set text
  setText(text) {
    this.text = text;
    return this;
  }

  // function to text color
  setTextColor(textColor) {
    this.textColor = textColor;
    return this;
  }

  // function to set color of shape
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  // function to render shape
  render() {
    throw Err('please pick a shape to render')
  }

}

// child class of shape
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" x="65" y="65" fill="${this.shapeColor}" />
      <text fill="${this.textColor}" style="font-size: 50px" x="100" y="155">${this.text}</text>
      </svg>`;
  }
}

// child class of shape
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
	    <text fill="${this.textColor}" style="font-size: 50px" x="95" y="155">${this.text}</text>
      </svg>`;

  }
}

// child class of shape
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
	    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
	    <text fill="${this.textColor}" style="font-size: 50px" x="100" y="155">${this.text}</text>
      </svg>`;
  }
}


module.exports = { Shape, Triangle, Circle, Square };
