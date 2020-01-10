const pool = require("../db");

var events = {};

events.all = (errorCallback, resultCallback) => {
  resultCallback(require("../../../../sample-data.json"))
};

module.exports = events;