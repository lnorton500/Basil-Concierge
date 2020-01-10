const pool = require("../db");

var catagories = {};

catagories.all = (errorCallback, resultCallback) => {
    var stored = [{
        "name": "Software Engineering",
        "score": Math.random() * 100,
        "color": "#48DD74"
    }, {
        "name": "Dev Ops",
        "score": Math.random() * 100,
        "color": "#AF0F48"

    }, {
        "name": "Testing",
        "score": Math.random() * 100,
        "color": "#277FE0"
    }, {
        "name": "UX Design",
        "score": Math.random() * 100,
        "color": "#2434C2"
    }, ]
    resultCallback(stored)
};

catagories.get = (catagory, errorCallback, resultCallback) => {
    resultCallback({
        "name": catagory,
        "score": Math.random() * 100
    })
}

module.exports = catagories;