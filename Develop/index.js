// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

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
        choices: ["![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)","[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)","[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]","[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
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

inquirer.prompt(questions).then((answers) => {
    const template = `
    # ${answers.projectName}

    ## Table of Contents

    <nav>
        <ol>
            <li><a href="#Project-Description">Project Description</a></li>
            <li><a href="#License">License</a></li>
            <li><a href="#What-you-need-to-know">What You Need to Know</a></li>
            <li><a href="#How-to-Contribute">How to Contribute</a></li>
            <li><a href="#Contact-Me">Contact Me</a></li>
        </ol>
    </nav>

    ## Project Description

    ${answers.project}

    ## License

    ${answers.license}

    ## What you need to know

    ${answers.repo}

    ## How to Contribute

    ${answers.contributing}

    ## Contact Me

    GibHub: ${answers.username}
    Email: ${answers.email}
      `;
  
    fs.writeFile("./README.md", template, () => {
      console.log("Please view your auto-generated README");
    });
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
