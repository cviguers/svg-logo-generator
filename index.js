// include packages and files needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square, Logo } = require("./lib/shapes");


// array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters.",
        // prompts user to enter 1-3 char if not done previously
        validate: (chars) => {
            if (chars.length === 0 || chars.length > 3) {
                return 'Entry must be between 1 and 3 characters.';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (OR a hexadecimal number) for the text.",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (OR a hexadecimal number) for the shape."
    },
];

const init = function () {
    inquirer
        .prompt(questions)
        .then((data) => {
            let { text, textColor, shape, shapeColor } = data;
            let shapeChoice = "";
            switch (shape) {
                case 'Cricle':
                    shapeChoice = new Circle();
                    break;
                case 'Square':
                    shapeChoice = new Square();
                    break;
                case 'Triangle':
                    shapeChoice = new Triangle();
                    break;
            }
            shapeChoice.setText(text).setShapeColor(shapeColor).setTextColor(textColor);
            fs.writeFile('logo.svg', shapeChoice.render(), (err) =>
            err ? console.log(err) : console.log("Generated logo.svg"))
        })
}

// call initialization of program
init();