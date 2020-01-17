const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/reading";

describe("/reading Gets extra reading content by category", () => {
  const CATEGORIES = ["linux"];

  it("Requests with valid category", async () => {
    request
      .get(API)
      .query({ category: CATEGORIES })
      .then(res => expect(res.ok).toBeTruthy());
  });

  /* Since Watson is an AI, invalid or irrelevant test data
  may still yield results so there are no tests as such */

  it("Requests without category", async () => {
    request.get(API).then(
      res => expect(false).toBeTruthy(), // shouldn't succeed
      err => expect(err.response.badRequest)
    );
  });
});
