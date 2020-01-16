const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/categories";

describe("/categories", () => {
  it("request with a valid search query", async () => {
    const res = await request
      .get(API)
      .accept("application/json")
      .query({ q: "c++" });

    // response
    expect(res.ok);
    expect(res.headers["content-type"]).toContain("json"); // correct content type
  });

  it("request with an empty query", async () => {
    try {
      await request
        .get(API)
        .accept("application/json")
        .query({ q: "" }); // empty

      expect(false); // shouldn't succeed
    } catch (err) {
      expect(err.badRequest);
    }
  });

  it("request without a search query", async () => {
    try {
      await request
        .get(API)
        .accept("application/json")
        .query({ q: "" }); // empty

      expect(false); // shouldn't succeed
    } catch (err) {
      expect(err.badRequest);
    }
  });
});
