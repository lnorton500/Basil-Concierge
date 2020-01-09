var express = require("express");
var router = express.Router();

const os = require("os");

router.get("/", function(req, res) {
  res.json({
    server: os.hostname(),
  });
});

module.exports = router;
