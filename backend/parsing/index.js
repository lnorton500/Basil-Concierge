const fs = require("fs");

let rooms = [];
const roomOne = require("./one.json");
const roomTwo = require("./two.json");
rooms = rooms.concat(roomOne, roomTwo);

let newEvents = [];

addEvent = event => {
  /*
    - remove id
    - remove language
    - remove link
    - remove type
    - remove slug

    - change subtitle type
    - black subtitles are empty arrays (wtf?)

    - combine start with date

    - convert duration from hh:mm to int

    - format persons
    */

  // delete shit
  delete event._id;
  delete event.language;
  delete event.links;
  delete event.type;
  delete event.slug;

  // format subtitle type
  if (Array.isArray(event.subtitle)) {
    event.subtitle = "";
  }

  // format persons
  let persons = [];

  if (Array.isArray(event.persons)) {
    event.persons.forEach(p => persons.push(p.value));
  } else {
    // object
    persons.push(event.persons.person.value);
  }

  event.persons = persons; // update

  // convert duration
  const d = event.duration.split(":"); // format HH:MM
  event.duration = parseInt(d[0]) * 60 + parseInt(d[1]);

  // combine start with date
  event.start = Date.parse(`"2020-01-01 ${event.start}`);

  // strip newlines from desc, abstract
  if (Array.isArray(event.description)) {
    event.description = "";
  }
  event.description = event.description.replace("\\newline", ""); // the fuck is this

  if (Array.isArray(event.abstract)) {
    event.abstract = "";
  }
  event.abstract = event.abstract.replace("\\newline", ""); // the fuck is this

  newEvents.push(event);
};

for (const room of rooms) {
  const events = room.event;

  // some rooms dont have events
  if (typeof events !== "undefined") {
    if (Array.isArray(events)) {
      events.forEach(e => addEvent(e));
    } else {
      // arrays of 1 were parsed into objects
      addEvent(events);
    }
  }
}

fs.writeFile("./events.json", JSON.stringify(newEvents, null, "  "), err =>
  console.dir(err)
);
