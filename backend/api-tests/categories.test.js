const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/categories";

describe("/categories", () => {
  it("request with a valid search query", async () => {
    await request
      .get(API)
      .query({ q: "c++" })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("json"); // correct content type
      });
  });

  it("request with an empty query", async () => {
    await request
      .get(API)
      .query({ q: "" })
      .then(
        res => expect(false).toBeTruthy(), // shouldn't succeed
        err => expect(err.response.badRequest).toBeTruthy()
      );
  });

  it("request without a search query", async () => {
    await request.get(API).then(
      res => expect(false).toBeTruthy(), // shouldn't succeed
      err => expect(err.response.badRequest).toBeTruthy()
    );
  });
});
