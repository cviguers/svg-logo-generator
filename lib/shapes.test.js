// importing shapes and creating deconstructed array to import shape instances
const path = require("path");
const { Circle, Square, Triangle} = require("./shapes");

// testing suite for shapes
describe("Circle", () => {
    // test is created to check if color keyword and circle code does return corresponding color and <circle>
    it("should check the color and class to return a green circle", () => {
      // creating new circle to confirm variables and render()
      const circle = new Circle();
      const render = circle.render();
      // stating test expectations
			expect(render.indexOf('<circle cx="135" cy="135" r="100" fill="green" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="white" style="font-size: 50px" x="95" y="155">CTV</text>')).toBeGreaterThanOrEqual(0);
    });
});


// testing suite for square is created
describe("Square", () => {
    // test is created to check if HEX# and circle code does return corresponding color and <rect>
    it("should check the HEX# and class to return a lavendar square", () => {
      // creating new square to confirm variables and render()
      const square = new Square();
      const render = circle.render();
      // stating test expectations
			expect(render.indexOf('<circle cx="135" cy="135" r="100" fill="#E6E6FA" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="#FFC0CB" style="font-size: 50px" x="95" y="155">FUN</text>')).toBeGreaterThanOrEqual(0);
    });
});

// testing suite for triange is created
describe("Triangle", () => {
    // test is created to check if HEX# and circle code does return corresponding color and <rect>
    it("should check the color and class to return a blue triangle with yellow letters", () => {
      // creating new triangle to confirm variables and render()
      const triange = new Triangle();
      const render = circle.render();
      // stating test expectations
			expect(render.indexOf('<circle cx="135" cy="135" r="100" fill="blue" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="yellow" style="font-size: 50px" x="95" y="155">YEL</text>')).toBeGreaterThanOrEqual(0);
    });
});
