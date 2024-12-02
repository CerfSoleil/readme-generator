// TODO: Include packages needed for this application
import fs from 'fs';
import colors from 'colors';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
import { questions } from './utils/questions.js';

const formatEntry = ({ name, email, gitHubName, repo, summary, documentation, installation, usage, contribution, credits, license }) => {
    return `# ${name}\n\n
  ## Description
  ${summary}\n\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Documentation](#documentation)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [License](#license)\n
  - [Questions](#questions)\n\n
  ## Installation\n
  ${installation}\n\n
  ## Usage\n
  ${usage}\n\n
  ## Documentation\n
  ${documentation}\n\n
  ## Contributing\n
  ${contribution}\n\n
  ## Credits\n
  ${credits}\n
  A link to the repositiory: ${repo}\n\n
  ## License\n
  ${license}\n\n\n

  ## Questions\n
If you have any questions, please feel free to contact me at ${email}. You can also find my GitHub here: [${gitHubName}](https://github.com/${gitHubName}).
`;
}

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
