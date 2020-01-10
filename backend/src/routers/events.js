var api = require("../utility/api");

var express = require("express");
var router = express.Router();

router.get("/all", function (request, response) {
  api.events.all(
    error => response.json(error),
    result => response.json(result)
  );
});

module.exports = router;