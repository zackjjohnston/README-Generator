const inquirer = require('inquirer')
const fs = require('fs')
//Create an array of questions for user input
const userPrompt = () => 
    inquirer.prompt([
        {    
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please provide a description of your project',
            name: 'description'
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
            message: 'Please provide the contribution guidelines for your project.',
            name: "contribution"
        },
        {
            type: 'input',
            message: 'Please provide instructions on how the project should be tested.',
            name: "testing"
        },
        {
            type: 'input',
            message: 'What license was used for the project?',
            name: 'license'
        },
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
    ])

//Create a function to write README file
const writeREADME = (answers) => {
return `
# ${answers.title}
[![GitHub License](https://img.shields.io/badge/license-${answers.license}-green)](License.md)
## Description
${answers.description}
## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[Contribution](#contribution)  
[Testing](#testing)  
[Questions](#questions)  
## Installation
${answers.installation}
<br/>
## Usage
${answers.usage}
<br/>
## Contribution
${answers.contribution}
<br/>
## Testing
For testing, run the following command:
${answers.testing}
<br/>
## License
${answers.license} 
<br/>
## Questions
Please contact the author with questions via:
* [${answers.email}](mailto:${answers.email})
* [${answers.username}](https://github.com/${answers.username})
`
}

//Create a function to initialize app
function init () {
    userPrompt().then((answers) => {
        try {
            const readme = writeREADME(answers)
            fs.writeFileSync('README.md', readme)
            console.log('README.md has been saved')
        } 
        catch (error) {
            console.log(error)
        }
    })
}
// Function call to initialize app
init()