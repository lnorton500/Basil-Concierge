const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/reading";

describe("/reading Gets extra reading content by category", () => {
  const VALID_CATEGORIES = ["linux", "ssh", "network"].join(",");

  it("Requests with valid categories", async () => {
    request
      .get(API)
      .query({ categories: VALID_CATEGORIES })
      .then(res => {
        expect(res.ok).toBeTruthy();
      });
  });

  /* Since Watson is an AI, invalid or irrelevant test data
    may still yield results so there are no tests as such */

  it("Requests without categories", async () => {
    request.get(API).then(
      res => {
        expect(false).toBeTruthy(); // shouldn't succeed
      },
      err => {
        expect(err.response.badRequest).toBeTruthy();
      }
    );
  });
});

describe("/events/:id Gets event information by Event ID", () => {
  const EVENT_ID = "f541619b0300380267d03457b2714041"; // valid event ID

  it("Requests with a valid ID", async () => {
    request
      .get(API + "/" + EVENT_ID) // route parameter
      .then(res => {
        // response
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("json");

        // data
        expect(res.body).toBeInstanceOf(Object);
      });
  });

  it("Requests with an invalid ID", async () => {
    request.get(API + "/nope").then(
      res => expect(false).toBeTruthy(), // shouldn't succeed
      err => expect(err.response.notFound).toBeTruthy()
    );
  });
});
