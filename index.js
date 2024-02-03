//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  }, {
    type: "input",
    name: "name",
    message: "Enter your full name.",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
 
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache_2.0", "MPL_2.0", "BSD_3--Clause", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm install"
  },

  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
 
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
];

//function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing README.md:", err);
    } else {
      console.log("README.md generated successfully!");
    }
  });
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    writeToFile("README.md", generateMarkdown(res));
  });
}
init();
