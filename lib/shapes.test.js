// importing shapes and creating deconstructed array to import shape instances
const { Circle, Square, Triangle} = require("./shapes");

// testing suite for shapes
describe("Circle", () => {
    // test is created to check if color keyword and circle code does return corresponding color and <circle>
    it("should check the color and class to return a green circle with ctv", () => {
      // creating new circle to confirm variables and render()
      const circle = new Circle();
      circle.setText('njn').setTextColor('white').setShapeColor('green');
      const render = circle.render();
      // stating test expectations
			expect(render.indexOf('<circle cx="135" cy="135" r="100" fill="green" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="white" style="font-size: 50px" x="95" y="155">njn</text>')).toBeGreaterThanOrEqual(0);
    });
});


// testing suite for square is created
describe("Square", () => {
    // test is created to check if HEX# and circle code does return corresponding color and <rect>
    it("should check the HEX# and class to return a #E6E6FA square with 'mkm", () => {
      // creating new square to confirm variables and render()
      const square = new Square();
      square.setText('mkm').setTextColor('black').setShapeColor('#E6E6FA');
      const render = square.render();
      // stating test expectations
			expect(render.indexOf('<rect width="300" height="200" fill="#E6E6FA" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="black" style="font-size: 50px" x="70" y="120">mkm</text>')).toBeGreaterThanOrEqual(0);
    });
});

// testing suite for triange is created
describe("Triangle", () => {
    // test is created to check if HEX# and circle code does return corresponding color and <rect>
    it("should check the color and class to return a yellow triangle with pink 'fun' letters", () => {
      // creating new triangle to confirm variables and render()
      const triangle = new Triangle();
      triangle.setText('fun').setTextColor('pink').setShapeColor('yellow');
      const render = triangle.render();
      // stating test expectations
			expect(render.indexOf('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="pink" style="font-size: 50px" x="110" y="155">fun</text>')).toBeGreaterThanOrEqual(0);
    });
});
