// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username",
        name: "username",
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: "email",
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: "projectName",
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: "project",
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: "license",
        choices: ["MIT","Apache","GPL 3.0","BSD3", "None"],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependecencies?',
        name: "dependecenceies",
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: "tests",
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: "repo",
    },
    {
        type: 'input',
        message: 'What does the user need to know about condtributing to the repo?',
        name: "contributing",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('View your README');
    });
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => writeToFile("README.md", data))
};

// Function call to initialize app
init();
