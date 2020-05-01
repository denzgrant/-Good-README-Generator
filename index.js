
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
        },
        {
            type: "input",
            message: "What is the name of this lovely project?",
            name: "projectName"
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
                "Apache",
                "None",
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
        return answers;
    })
}
const githubLicense = (license) => {
    const licenseURL = `https://api.github.com/licenses/MIT`;
    console.log(license);
    return axios.get(licenseURL).then(function (response) {
        console.log(response); 

    }).catch(function (err) {
        console.log(err)
    }
    )

}

const githubData = (username) => {
    const queryUrl = `https://api.github.com/users/${username}/events/public`;
    return axios.get(queryUrl).then(function (res) {

        const { avatar_url } = res.data[0].actor;
        const { email } = res.data[0].payload.commits[0].author;

        return {
            avatar_url,
            email,
        }


    }).catch(function (err) {
        console.log(err)
    }
    )

}

function generateReadme(answers, githubInfo) {
    return `
<h1>${answers.projectName}</h1>
<p>${answers.description}</p>
<h2>Table of Contents</h2>
<ul> 
 <li><a href="#Installation">Installation</a></li> 
 <li><a href="#Usage">Usage</a></li>   
 <li><a href="#License">License</a></li>   
 <li><a href="#Contributing">Contributing</a></li>   
 <li><a href="#Tests">Tests</a></li>   
 <li><a href="#Questions">Questions</a></li>                         
</ul>
<h2 id="Installation">Installation</h2>                         
<p>${answers.install}</p>
<h2 id="Usage">Usage</h2>
<p>${answers.usage}</p> 
<h2 id="License">License</h2>
<p>Licensed under the<a href="./README.md">${answers.license}</a></p>
<h2 id="Contributing">Contributing</h2>
<p>${answers.contributing}</p>
<h2 id="Tests">Tests</h2>
<h3>To test this project, follow these directions:</h3>
<p>${answers.tests}</p>
<h2 id="Questions">Questions</h2>
<p style="strong">Any questions regarding this project, contact ${githubInfo.email} directly</p> 
<img src="${githubInfo.avatar_url}" alt="git hub profile picture" height="42" width="42">
<img src="https://img.shields.io/badge/Node-12.16.3-brightgreen">
<img src="https://img.shields.io/badge/-JavaScript-brightgreen">
<img src="https://img.shields.io/github/followers/denzgrant?label=follow&style=social">                           
`;
}
async function init() {
    try {
        const answers = await promptUser();
        githubData(answers.username).then(async (github) => {
            githubLicense();
            // const license = generateReadme
            const readMe = generateReadme(answers, github)
            await writeFileAsync("README.md", readMe);
            console.log("Created README!");
        })

    } catch (err) {
        console.log(err);
    }
}

init();
