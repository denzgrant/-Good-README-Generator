
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const promptUser = () => {
    return inquirer.prompt([
            {
                message: "Hello, I am here to assist with creating you a professional ReadMe. Can you start with entering your GitHub username",
                name: "username",
            },
            {
                message: "What is the name of this lovely project?",
                name: "project-name"
            },
            {
                message: "Thats a cool name. Can you provide a description of the project? Remeber to answer the \'what\', \'why\' and \'how\' .",
                name: "description"
            },
            {
                message: "What kind of license do you want for the project?",
                name: "license",
                choices: [
                    "license 1", 
                    "license 2", 
                    "license 3", 
                    "license 4"
                  ]
            },
            {
                message: "What do you want the user to know regarding the usage of your project?",
                name: "usage"
            },
            {
                message: "What do you want the user to know about contributing to your poject?",
                name: "contributing"
            },
            {
                message: "Are there any features?",
                name: "features-confirm"
            },

        ]);
    }
    // .then(function ({ username }) {
    //     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    // }); 
    // axios
    //   .get(queryUrl)
    //   .then((response) => {
    //     console.log(response.data);
    
    //     const repoNames = response.data.map((repo) => { return repo.name });

    //     return appendFileAsync("jokes.txt", joke + "\n"); 
    //   })
    //   .then(() => {
    //     console.log("success");

    //     return readFileAsync("jokes.txt", "utf-8")
    //   })
    //   .then((data) => {
    //     console.log("---READ FROM FILE---")
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);

    //   });



    function writeToFile(fileName, data) {
    }

    function init() {

    }

    init();





// axios
//   .get("https://icanhazdadjoke.com/", config)
//   .then((res) => {
//     console.log(res.data);

//     const { joke } = res.data

//     return appendFileAsync("jokes.txt", joke + "\n"); 
//   })
//   .then(() => {
//     console.log("success");

//     return readFileAsync("jokes.txt", "utf-8")
//   })
//   .then((data) => {
//     console.log("---READ FROM FILE---")
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);

//   });