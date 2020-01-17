const superagent = require("superagent");
require("dotenv").config();

const API = "https://basil.eu-gb.mybluemix.net/api/categories";

const request = superagent.agent().timeout({
  response: process.env.RESPONSE,
  deadline: process.env.DEADLINE
});

describe("/categories Gets Watson-usable categories by a search query", () => {
  it("Requests with a valid search query", async () => {
    request
      .get(API)
      .query({ q: "c++" })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("json"); // correct content type
      });
  });

  it("Requests with an empty query", async () => {
    request
      .get(API)
      .query({ q: "" })
      .then(
        res => expect(false).toBeTruthy(), // shouldn't succeed
        err => expect(err.response.badRequest).toBeTruthy()
      );
  });

  it("Requests without a search query", async () => {
    request.get(API).then(
      res => expect(false).toBeTruthy(), // shouldn't succeed
      err => expect(err.response.badRequest).toBeTruthy()
    );
  });
});
