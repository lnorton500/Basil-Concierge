var api = require("../utility/api");

var express = require("express");
var router = express.Router();

router.get("/all", function (request, response) {
    api.catagories.all(
        error => response.json(error),
        result => response.json(result)
    );
});

router.get("/:cat", function (request, response) {
    api.catagories.get(request.body.cat,
        error => response.json(error),
        result => response.json(result)
    );
});

module.exports = router;