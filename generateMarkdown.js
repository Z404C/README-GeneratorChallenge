// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'Apache 2.0'){
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if(license === 'GPL v3.0'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else {
    badge="";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if(license === 'MIT'){
    link = 'https://opensource.org/licenses/MIT'
  }else if (license === 'Apache 2.0'){
    link = 'https://opensource.org/licenses/Apache-2.0'
  }else if(license === 'GPL v3.0'){
    link = 'https://www.gnu.org/licenses/gpl-3.0'
  }else {
    link="";
  }
  return link;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ''
  if(license==='None'){
    section=''
  }else{
    section= `License ${license}`
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ### - [License](#license)
  ### - [Installation](#installation)
  ### - [Usage](#usage)
  ### - [Contributors](#contributors)
  ### - [Tests](#tests)
  ### - [Questions](#questions)

  ## License:
  ### ${data.license}

  ## Installation:
  ### You need to install the following for the app to functions:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}

  ## Contributors:
  ### ${data.contribute}

  ## Tests:
  ### Run the following commands in the your terminal to test this app:
  ### ${data.tests}

  ## Questions 
  ### Questions? Contact me at:
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
