const request = require("request"); // HTTP requests
require("dotenv").config(); // secure api key/password storage

// setup db url
const URL = `https://
  ${process.env.EVENTS_KEY}:
  ${process.env.EVENTS_PASS}@
  ${process.env.CLOUDANT}`.replace(/\s/g, ""); // strip whitespace

const options = {
  method: "POST",
  uri: URL + "/events",
  body: {}
};

request;
