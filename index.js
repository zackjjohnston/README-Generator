const inquirer = require('inquirer')
const fs = require('fs')
const generatemarkdown = require('./utils/generateMarkdown.js');
//Create an array of questions for user input
const questions = [
    {    
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description.'
    },
    {
        type: 'input',
        message: 'Please provide a installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide a decription of usage of the project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide a description of the contribution guidelines for your project.',
        name:
    },
    {
        type: 'input',
        message: 'Please provide instructions on how the project should be tested.',
        name:
    },
    {
        type: 'input',
        message: 'Please provide the license used for the project.',
        name: 'list'
    }
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'username'
    },    
    {
        type: 'input',
        message: 'Please provide your e-mail address.',
        name: 'email'
    }
]

// TODO: Create a function to write README file
{
    promptUser().then((answers) => {
        try {
            const readme = generateREADME(answers);
            fs.writeFileSync('README.md', readme);
            console.log('Succesfully wrote README.md file');
        } catch (error) {
            console.log(error);
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => { 
        fs.writeFileSync(`${response.title}-README.md`, writeToFile(response), (err) => { 
            err ? console.error(err) : console.log('Your new README file has been generated!')
        })
    })
 }

// Function call to initialize app
init();
