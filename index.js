// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message:'What is your project Title?',
    name: 'title'
    
},
{
    type: 'input',
    message:'Brief Description of your Project',
    name: 'description'
    
},
{
    type: 'input',
    message:'What are your installation instructions?',
    name: 'install'
    
},
{
    type: 'input',
    message:'List and outside collaborators or contributions',
    name: 'credits'
    
},
{
    type: 'list',
    message:'What licenses are used in production?',
    name: 'license'
    
},
{
    type: 'input',
    message:'Reference you github username here',
    name: 'github'
    
},
{
    type: 'input',
    message:'What is associated email?',
    name: 'email'
    
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
