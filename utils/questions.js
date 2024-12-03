import colors from 'colors';

import licenses from './licenses.js';

export const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: colors.blue('What is your project called?\n'),
        default: 'Placeholder Project Name'
    },{
        type: 'input',
        name: 'gitHubName',
        message: colors.blue('What is your github username?\n'),
        default: 'Placeholder'
    },{
        type: 'input',
        name: 'email',
        message: colors.blue('What is your email address?\n'),
        default: 'placeholder@email.com'
    },{
        type: 'input',
        name: 'repository',
        message: colors.blue('Provide a link to your GitHub project repository:\n'),
        default: 'Github link here'
    },{
        type: 'input',
        name: 'summary',
        message: colors.blue('Describe your project in a few sentences.\n'),
        default: 'Fill this with information about your project.'
    },{
        type: 'input',
        name: 'documentation',
        message: colors.blue('Please insert a link to your project repo here.\n'),
        default: 'Place your project repo link here.'
    },{
        type: 'input',
        name: 'installation',
        message: colors.blue('Does your project require installation? If so, how?\n')
    },{
        type: 'input',
        name: 'usage',
        message: colors.blue('Describe the steps to using your project, how does a user get it working?\n'),
        default: 'Use here to explain how to use your project.'
    },{
        type: 'input',
        name: 'contribution',
        message: colors.blue('What are some ways that people can contribute to the development of your project?\n'),
    },{
        type: 'input',
        name: 'credits',
        message: colors.blue('List collaborators, major software, or those that helped:\n'),
        default: 'Thank those that has helped you, in code or in spirit.'
    }, {
        type: 'list',
        name: 'license',
        message: colors.blue('Select what liscence the project uses?\n'),
        choices: licenses,
        default: licenses[0]
    }
];

export default questions;
