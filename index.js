// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util')

const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          message: 'What is your GitHub username?',
          name: 'name'
        },
        {
          type: 'input',
          message: 'What is your email address?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the name of your project?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Give a short description of your project.',
          name: 'desc',
        },
        {
          type: 'list',
          message: 'What is the license for your project?',
          choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
          name: 'license'
        },
        {
          type: 'input',
          message:'What command should be used to install dependencies?',
          name:'installation'
        },
        {
          type:'input',
          message:'What command should be run to run tests?',
          name:'tests'
        },
        {
          type:'input',
          message:'What does the user need to know about using the repo?',
          name:'usage'
        },
        {
          type:'input',
          message:'What does the user need to know about contributing to the repo?',
          name:'contribute'
        },
       ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    console.log(fileName)
    console.log(data)
    if(err){
      return console.log(err)
    }else{
      console.log('success')
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data){
      writeToFile("README.md", generateMarkdown(data));
      console.log(data)
    })
}

// Function call to initialize app
init();
