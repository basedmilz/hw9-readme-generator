// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ('BSD' === badge) {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
 }
 else if ('MIT' === badge) {
   return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
 }
 else if ('Eclipse' === badge) {
   return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
 }
 else 
 return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('BSD' === license) {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
 }
 else if ('MIT' === license) {
   return '(https://opensource.org/licenses/MIT)'
 }
 else if ('Eclipse' === license) {
   return '(https://opensource.org/licenses/EPL-1.0)'
 }
 else 
 return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ---
  ${data.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [License](#Licence)
  - [Badge](#Badge)
  - [Credits](#Credits)
  - [Github](#Github)
  - [Email](#Email)
  

  ## Installation
  ---

  ${data.install}

  ## Credits
  ---
  ${data.credits}

  ## License
  ---
  ${data.license}

  ## Badge
  ---
  ${data.badge}

  ### Github
  ---

  ${data.github}

  ### Email
  ---
  ${data.email}


`;
}

module.exports = generateMarkdown;
