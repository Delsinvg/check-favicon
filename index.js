const core = require('@actions/core');
const github = require('@actions/github');
const axios = require("axios").default;

try {
    const siteUrl = core.getInput("site");

    axios
    .get(siteUrl)
    .then(function (response) {
      let favicon = response.data.match(
        /<link rel="icon" ([^<]+)>/
      );
      console.log(favicon[0])

      if (! favicon) {
        core.setFailed("No favicon on page");
      }

      if (favicon) {
        let faviconUrl = getHref(favicon[0])
        core.setOutput("favicon", faviconUrl);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
} catch (error) {
  core.setFailed(error.message);
}

function getHref(href) {
    console.log(href)
    let start_pos = href.indexOf("href=\"") + 6;
    console.log(start_pos);
    let end_pos = href.indexOf("\"", start_pos);
    console.log(end_pos);
    return resulthref = href.substring(start_pos, end_pos);
  }

<link rel="icon" href="https://codedor.be/favicon.ico" type="image/x-icon"/>