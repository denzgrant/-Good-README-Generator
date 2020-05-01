const generateReadme = require("./ReadMe"); 
const githubAPI = require("./github");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer;
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message:
          "Hello, I am here to assist with creating you a professional ReadMe. Can you start with entering your GitHub username",
        name: "username",
      },
      {
        type: "input",
        message: "What is the name of this lovely project?",
        name: "projectName",
      },
      {
        type: "input",
        message:
          "Thats a cool name. Can you provide a description of the project? Remeber to answer the 'what', 'why' and 'how' .",
        name: "description",
      },
      {
        type: "list",
        message: "What kind of license do you want for the project?",
        name: "license",
        choices: ["MIT", "Gpl-3.0", "Unlicense", "Apache-2.0", "None"],
      },
      {
        type: "input",
        message:
          "What do you want the user to know regarding the usage of your project?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "Do you want list instructions regarding how to install your project?",
        name: "install",
      },
      {
        type: "input",
        message:
          "What do you want the user to know about contributing to your poject?",
        name: "contributing",
      },
      {
        type: "input",
        message: "How can the user run tests for your project?",
        name: "tests",
      },
    ])
    .then(function (answers) {
      return answers;
    });
};


async function init() {
  try {
    const answers = await promptUser();
    githubAPI.Data(answers.username).then(async (github) => {
      const ghLicense = await githubAPI.License(answers.license);
      const readMe = generateReadme(answers, github);
      await writeFileAsync("README.md", readMe);
      await writeFileAsync("License.txt", ghLicense);
      console.log("Created README!");
    });
  } catch (err) {
    console.log(err);
  }
}

init();
