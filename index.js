const core = require('@actions/core');
const github = require('@actions/github');
const axios = require("axios").default;

try {
    const siteUrl = core.getInput("site");

    axios
    .get(siteUrl)
    .then(function (response) {
      let favicon = response.data
      console.log(favicon);
    })
    .catch(function (error) {
      console.log(error);
    });
} catch (error) {
  core.setFailed(error.message);
}