// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project Title?',
            name: 'title'

        },
        {
            type: 'input',
            message: 'Brief Description of your Project',
            name: 'description'

        },
        {
            type: 'input',
            message: 'What are your installation instructions?',
            name: 'install'

        },
        {
            type: 'input',
            message: 'List any outside collaborators or contributions',
            name: 'credits'

        },
        {
            type: 'list',
            message: 'What licenses are used in production?',
            name: 'license',
            choices: ['BSD',
            'MIT',
            'GPL',]

        },
        {
            type: 'input',
            message: 'Reference you github username here',
            name: 'github'

        },
        {
            type: 'input',
            message: 'What is associated email?',
            name: 'email'

        },


    ],
    )
    .then((data) => {
       fs.writeFile('README.md',generate(data), (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

        }

// Function call to initialize app
init();
