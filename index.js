
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
        console.log(answers.username);
        const queryUrl = `https://api.github.com/users/${answers.username}/events/public`;


        axios.get(queryUrl).then(function (res) {
            console.log(res)
            console.log(res.avatar_url)
            if (err) {
                throw err;
              }

            // const profilePic = res.data.map(function (image) {
            //     return image.avatar_url;
            // });

        }
        )
    }
    )
}
promptUser();

                // });

                // .then(function (data) {
                //     api.getUsers(data.username)


                // });
                // //  let createfile = (filename) => {
                //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

                //         if (err) {
                //             return console.log(err);
                //         }

                //         console.log("Success!");

                //     });
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



                // async function init()
                // init();

                //     });
                // }



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

