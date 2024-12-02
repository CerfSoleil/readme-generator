// TODO: Include packages needed for this application
import fs from 'fs';
import colors from 'colors';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
import { questions } from './utils/questions.js';
import { formatEntry } from './utils/format.js';

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./exports/README.md', data, function (error){
        if(error) {
            console.error('File could not be written: ', error)
    } else console.log(colors.green("File created!"));
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
.then(answers => {
    console.log(colors.green(answers));
    const string = formatEntry (
        {
        name: answers.projectName,
        email: answers.email,
        gitHubName: answers.gitHubName, 
        repo: answers.repository,
        summary: answers.summary,
        documentation: answers.documentation,
        installation: answers.installation,
        usage: answers.usage,
        contribution: answers.contribution,
        credits: answers.credits,
        license: answers.license,
    });

    writeToFile(string);
}).catch(error => {
    console.log(colors.red(error));
});
}

// Function call to initialize app
init();
