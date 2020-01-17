const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/events";

const EVENT_ID = "f541619b0300380267d03457b2714041"; // valid event ID

describe("/events/:id Get event information by Event ID", () => {
  it("Requests with a valid ID", async () => {
    await request
      .get(API + "/" + EVENT_ID) // route parameter
      .then(res => {
        // response
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("json");
      });
  });

  it("Requests with an invalid ID", async () => {
    await request.get(API + "/nope").then(
      res => expect(false).toBeTruthy(), // shouldn't succeed
      err => expect(err.response.notFound).toBeTruthy()
    );
  });
});
