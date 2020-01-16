const request = require("superagent");
require("jest");

const API = "https://basil.eu-gb.mybluemix.net/api/categories";

describe("/categories with valid query", () => {
  it("returns Watson categories", async () => {
    const res = await request.get(API).query({ q: "linux" });

    expect(res.statusCode).toEqual(200);
  });
});
