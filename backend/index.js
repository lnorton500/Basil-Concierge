const request = require("superagent");
const API = "https://basil.eu-gb.mybluemix.net/api/categories";

(async () => {
  try {
    await request
      .get(API)
      .accept("application/json")
      .query({ q: "" }); // empty

    expect(false); // shouldn't succeed
  } catch (err) {
    console.log(err.body);
  }
})();
