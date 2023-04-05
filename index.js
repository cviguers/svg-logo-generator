// include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./lib/shapes")

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (OR a hexadecimal number) for the text.",
    },
    {
        type: "checkbox",
        name: "shape",
        message: "Choose a shape."
        choices: [
            "circle",
            "triangle",
            "square",
        ],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (OR a hexadecimal number) for the shape."
    }
]

var init = function() {
    inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('logo.svg', generateLogo(data), (err) =>
        err ? console.log(err) : console.log("Generated logo.svg"))
    })
}

init();