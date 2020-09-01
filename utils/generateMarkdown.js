// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
![Bower](https://img.shields.io/bower/l/markdown?color=%23green&label=license&logo=${data.license}&style=plastic)
## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## Licence
![Bower](https://img.shields.io/bower/l/markdown?color=%23green&label=license&logo=${data.license}&style=plastic)
## Contributors
${data.contributing}
## Test
${data.test}
## Questions

## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;