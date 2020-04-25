// const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");


const questions = [

];
inquirer
    .prompt({
        message: "Enter your GitHub username",
        name: "username"
    })
    // .then(function ({ username }) {
    //     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    // }); 
        // axios
        //   .get(queryUrl)
        //   .then((res) => {
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