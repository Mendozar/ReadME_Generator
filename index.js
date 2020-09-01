//Load Modules
const inquirer = require("inquirer");
const fs = require('fs');
//const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');

// Questions
function promptUserInfo() {
  return inquirer.prompt([
    // Title
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    // Description
    {
      type: "input",
      name: "description",
      message: "Please describe your project."
    },
    // Installation Instructions
    {
      type: "input",
      name: "installation",
      message: "Please provide the installation instructions for your project."
    },
    // Usage Information
    {
      type: "input",
      name: "usage",
      message: "Please provide the project usage information."
    },
    // Contribution guidelines
    {
      type: "input",
      name: "contributing",
      message: "Please provide the contribution guidelines."
    },
    // Test Instructions
    {
      type: "input",
      name: "test",
      message: "Please provide the project tests"
    },
    // License
    // Must be from a list of options
    // Add a badge for that license near the top of the Readme
    // Add a notice to the License section explaining which license the application is covered under.
    {
      type: "list",
      name: "licence",
      message: "Please provide the project licence or your badge link.",
      choices: ["mit", "lgpl-3.0", "mpl-2.0","agpl-3.0","unlicense","apache-2.0","gpl-3.0"]
    },
    // Github Username
    {
        type: "input",
        name: "username",
        message: "What is your Github user name?"
    },
    // Email
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
])
};


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("readme generated!");
  });
}

// function to initialize program
async function init() {
  try {
    const userAnswers = await promptUserInfo();
    generateMarkdown(userAnswers);
    writeToFile("README.md", generateMarkdown(userAnswers));
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();