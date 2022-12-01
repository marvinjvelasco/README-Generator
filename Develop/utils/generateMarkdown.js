// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = " "
  if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) "
  } else if(license === "APACHE 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) "
  } else if(license === "GPL 3.0"){
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) "
  } else if (license === "BSD 3"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) "
  } else {
    licenseBadge = " "
  }
  return licenseBadge
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = " "
  if(license === "MIT"){
    licenseLink = "https://opensource.org/licenses/MIT"
  } else if(license === "APACHE 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
  } else if(license === "GPL 3.0"){
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "BSD 3"){
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
  } else {
    licenseLink = " "
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === true){
    return "License Badge"
  } else {
    return " "
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

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

${data.project}

## License

${renderLicenseBadge(data.license)}

## What you need to know

${data.repo}

## How to Contribute

${data.contributing}

## Contact Me

GibHub: ${data.username}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
