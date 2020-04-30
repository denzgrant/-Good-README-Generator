
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Hello, I am here to assist with creating you a professional ReadMe. Can you start with entering your GitHub username",
            name: "username",
            // validate(input) {
            //     if (input === true) {
            //         console.log("wrong name"); 
            //     }
            // }
        },
        {
            type: "input",
            message: "What is the name of this lovely project?",
            name: "project-name"
        },
        {
            type: "input",
            message: "Thats a cool name. Can you provide a description of the project? Remeber to answer the \'what\', \'why\' and \'how\' .",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license do you want for the project?",
            name: "license",
            choices: [
                "MIT",
                "GNU",
                "Unlicense",
                "Apache"
            ]
        },
        {
            type: "input",
            message: "What do you want the user to know regarding the usage of your project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Do you want list instructions regarding how to install your project?",
            name: "install"
        },
        {
            type: "input",
            message: "What do you want the user to know about contributing to your poject?",
            name: "contributing"
        },
        {
            type: "input",
            message: "How can the user run tests for your project?",
            name: "tests"
        }

    ]).then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}/events/public`;

        
        axios.get(queryUrl).then(function (res) {
            //how to return these two values? 
            const { avatar_url } = res.data[0].actor;
            const { email, name} = res.data[0].payload.commits[0].author;
           

        }).catch(function (err) {
            console.log(err)
        }
        )
        
        return answers;
    })
}
// promptUser(); 
function generateReadme(answers) {
    return `
    <h1>${answers.project-name}</h1>
    <p>${answers.description}</p>
    
    ## Table of Contents
                              
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
                              
    ## Installation
                              
    ${answers.install}
                              
    ## Usage
                              
    ${answers.usage}

    ## License 
	
   ${answers.license}
                              
    ## Contributing
                              
    ${answers.contributing}
                              
    ## Tests 
                              
     To test this project, follow these directions:
                              
    ${answers.tests}
                              
    ## Questions
                              
    ![GitHub Avatar](${avatar_url})
                
    Any questions regarding this project, contact ${email} directly
    `;
}
async function init() {
    try {
      const answers = await promptUser();
  
      const readMe = generateReadme(answers);
  
      await writeFileAsync("README.md", readMe);
  
      console.log("Created README!");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  