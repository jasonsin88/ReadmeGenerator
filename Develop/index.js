// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to README Generator. To begin, please enter your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Your full name is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Your GitHub username is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Your email address is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
        validea: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Your project title is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Your project description is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation instructions are required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the instructions for usage:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Instructions for usage is required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter instructions for contribution to this project:',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Instructions for contribution is required');
                return false;
            }
        }
    },
    {  
        type: 'input',
        name: 'tests',
        message: 'Enter tests written for your application',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Tests written for your application is required');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        defautl: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license(s) would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
    ]); 
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Success! You can now view your README!'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
