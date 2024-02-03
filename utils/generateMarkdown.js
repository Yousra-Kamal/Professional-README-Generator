 //function that returns a license badge based on which license is passed in
//If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "MIT") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  } else if (license == "MPL_2.0") {
    return `![Github license](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  }
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

//function that returns the license link
//If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === "BSD_3--Clause") {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Apache_2.0") {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "MPL_2.0") {
    return `[![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }
}


//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

## Usage
${data.usage}

## License
 ${
   data.license !== "None"
     ? renderLicenseLink(data.license) +
       " This project is licensed under the " +
       data.license +
       " license."
     : "N/A"
 }
 
## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
