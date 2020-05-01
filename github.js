const axios = require("axios"); 

const githubAPI = {
    License: (license) => {
        const licenseURL = `https://api.github.com/licenses/${license}`;
        console.log(license);
        if (license === "None") {
          return;
        }
      
        return axios
          .get(licenseURL)
          .then(function (response) {
            const { body } = response.data;
            return body;
          })
          .catch(function (err) {
            console.log(err);
          });
      },
    Data: (username) => {
        const queryUrl = `https://api.github.com/users/${username}/events/public`;
        return axios
          .get(queryUrl)
          .then(function (res) {
            const { avatar_url } = res.data[0].actor;
            const { email } = res.data[0].payload.commits[0].author;
      
            return {
              avatar_url,
              email,
            };
          })
          .catch(function (err) {
            console.log(err);
          });
      }
}

module.exports = githubAPI; 