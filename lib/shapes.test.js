// importing classes and shapes.js
const { Triangle, Circle, Square } = require("./shapes");

// testing suite for circle is created
describe("Circle", () => {
  // test is created to check if color keyword and circle code does return corresponding color and <circle>
  describe("render", () => {
    it("should check the color and class to return a green circle", () => {
      // creating new circle to compare code
      const shape = new Circle();
      //   testing green
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="50" cy="50" r="40" fill="green" />'
      );
    });
  });
});

// testing suite for square is created
describe("Square", () => {
  // test is created to check if HEX# and circle code does return corresponding color and <rect>
  describe("render", () => {
    it("should check the HEX# and class to return a lavendar square", () => {
      // creating new square to compare code
      const shape = new Square();
      // testing HEX#
      shape.setColor("#e6e6fa");
      expect(shape.render()).toEqual(
        '<rect x="50" y="20" width="150" height="150" fill="#e6e6fa" />'
      );
    });
  });
});

// testing suite for triange is created
describe("Triangle", () => {
  // test is created to check if HEX# and circle code does return corresponding color and <rect>
  describe("render", () => {
    it("should check the color and class to return a blue triangle", () => {
      // creating new triangle to compare code
      const shape = new Triangle();
      //   testing color key
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
