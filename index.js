
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

inquirer
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Hello, I am here to assist with creating you a professional ReadMe. Can you start with entering your GitHub username",
            name: "username",
            validate: function(input) {
                if (input === false) {
                    console.log("wrong name"); 
                }
            }
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
            message: "What do you want the user to know about contributing to your poject?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Are there any features?",
            name: "features-confirm"
        }
    ]).then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}/events/public`;
    

        axios.get(queryUrl).then(function (res) {
            console.log(res.data[0])

            const { avatar_url } = res.data[0].actor;
            let photo = avatar_url;
            let email = res.data[0].payload.commits[0].author.email;
            // return photo
            // return email

            // console.log(photo)
            // console.log(email)

        }).catch(function (err) {
            console.log(err)
        }
        )
        return answers;
    })
}
promptUser();
