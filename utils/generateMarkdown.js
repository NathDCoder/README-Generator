// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "NONE") return;
  return `![LICENSE](https://img.shields.io/badge/LICENSE-${license}-SUCCESS)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Testing
  ${data.testing}
`
}

module.exports = generateMarkdown;
