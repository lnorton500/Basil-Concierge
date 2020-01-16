/*
Used to insert event data from events.json into Cloudant database
*/

const request = require("request"); // HTTP requests
require("dotenv").config(); // secure api key/password storage

// setup db url
const URL = `https://
  ${process.env.EVENTS_KEY}:
  ${process.env.EVENTS_PASS}@
  ${process.env.CLOUDANT}`.replace(/\s/g, ""); // strip whitespace

const events = require("../../events.json");
const count = events.length;

const insert = (uuid, event) => {
  // configure request
  const options = {
    method: "PUT",
    uri: `${URL}/events/${uuid}`,
    body: JSON.stringify(event)
  };

  // try insert
  request(options, (err, res, body) => {
    body = JSON.parse(body);

    // check success
    // Cloudant Lite has 10 writes per sec limit
    if (!body.hasOwnProperty("error")) {
      console.log(`Inserted event: ${event.title}`);
    } else {
      // retry insert
      insert(uuid, event);
    }
  });
};

request.get(`${URL}/_uuids?count=${count}`, (err, res, body) => {
  const UUIDs = JSON.parse(body).uuids;

  for (let i = 0; i < count; ++i) {
    insert(UUIDs[i], events[i]);
  }
});
