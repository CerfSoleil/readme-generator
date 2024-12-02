import fs from 'fs';

export const formatEntry = ({ name, email, gitHubName, repo, summary, documentation, installation, usage, contribution, credits, license }) => {
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
  the repo can be found here: ${documentation}\n\n
  ## Contributing\n
  ${contribution}\n\n
  ## Credits\n
  ${credits}\n
  A link to the repositiory: ${repo}\n\n
  ## License\n
  This project uses a ${license} license.\n\n\n

  ## Questions\n
If you have any questions, please feel free to contact me at ${email}. You can also find my GitHub here: [${gitHubName}](https://github.com/${gitHubName}).
`;
}

export default formatEntry;
