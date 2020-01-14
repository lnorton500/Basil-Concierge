var api = require("../utility/api");

var express = require("express");
var router = express.Router();

router.get("/all", function (request, response) {
    //response.set("Access-Control-Allow-Origin", '*')
    api.catagories.all(
        error => response.json(error),
        result => response.json(result)
    );
});

module.exports = router;