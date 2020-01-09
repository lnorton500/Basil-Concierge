const pool = require("../db");

var projects = {};

projects.all = (errorCallback, resultCallback) => {
  pool.query("SELECT * FROM projects ORDER BY ID asc", (err, res) => {
    if (err) {
      console.log(err);
      errorCallback(err);
    } else {
      resultCallback(res.rows);
    }
  });
};

module.exports = projects;
