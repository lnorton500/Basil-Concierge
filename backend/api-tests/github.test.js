const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/github";

const USERNAME = "johndoe";

describe("/github Prompts user for Github login, sends code to front-end for OAuth token", () => {
  it("Directs to sign-in page with a username", async () => {
    await request
      .get(API)
      .query({ username: USERNAME }) // query
      .then(res => {
        // response
        expect(res.ok).toBeTruthy();
        expect(res.redirects.length).toBeGreaterThan(0); // to Github sign-in

        // redirect data from Location header
        const redirect = new URL(res.redirects[0]);

        expect(redirect.searchParams.get("client_id")).not.toBeNull(); // for Github OAuth
        expect(redirect.searchParams.get("allow_signup")).toEqual("false"); // prevents new users
        expect(redirect.searchParams.get("login")).toEqual(USERNAME); // username
      });
  });

  it("Directs to sign-in page without a username", async () => {
    await request.get(API).then(res => {
      // response
      expect(res.ok).toBeTruthy();
      expect(res.redirects.length).toBeGreaterThan(0); // to Github sign-in

      // redirect data from Location header
      const redirect = new URL(res.redirects[0]);

      expect(redirect.searchParams.get("client_id")).not.toBeNull(); // for Github OAuth
      expect(redirect.searchParams.get("allow_signup")).toEqual("false"); // prevents new users

      expect(!redirect.searchParams.has("login")); // no username sent to sign-in page
    });
  });
});
