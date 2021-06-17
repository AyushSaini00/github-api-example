require('dotenv').config();
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
    auth: process.env.PERSONAL_ACCESS_TOKEN
});

const response = await octokit.request("GET /orgs/{org}/repos", {
    org: "AyushSaini00",
    type: "public",
});