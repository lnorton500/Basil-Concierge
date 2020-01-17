const superagent = require("superagent");
require("dotenv").config();

const API = "https://basil.eu-gb.mybluemix.net/api/reading";

const request = superagent.agent().timeout({
  response: process.env.RESPONSE,
  deadline: process.env.DEADLINE
});

describe("/reading/:id Gets extra reading content by Event ID", () => {
  const ID = ["0274ff513ec82397bc68991514f48f66"];

  it("Requests with valid category", async () => {
    request.get(API + "/" + ID).then(res => {
      // data
      expect(res.ok).toBeTruthy();
      expect(res.headers["content-type"]).toContain("json");

      // data
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });
});
