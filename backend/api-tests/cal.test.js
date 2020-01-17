const request = require("superagent");

const API = "https://basil.eu-gb.mybluemix.net/api/cal";

describe("/cal Generates an iCal file from events by Event ID ", () => {
  const IDs = [
    "0a93a7d91753eb122f3bfce5bb95dc08",
    "0274ff513ec82397bc68991514f48f66",
    "125643b03c744fa6ff05162931943f93"
  ];

  it("Requests with valid IDs", async () => {
    await request
      .get(API)
      .query({ ids: IDs.join(",") })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("text/calendar");
        expect(res.headers["content-disposition"]).toContain("attachment");
      });
  });

  it("Requests with some valid IDs", async () => {
    await request
      .get(API)
      .query({ ids: IDs[0] + "," + IDs[1] + ",1000," + IDs[2] + ",pounds" })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.headers["content-type"]).toContain("text/calendar");
        expect(res.headers["content-disposition"]).toContain("attachment");
      });
  });

  it("Requests with invalid IDs", async () => {
    await request
      .get(API)
      .query({ ids: "pineapples,government,punk,rockers" })
      .then(
        res => expect(false).toBeTruthy(),
        err => expect(err.response.notFound).toBeTruthy()
      );
  });

  it("Requests without IDs", async () => {
    await request.get(API).then(
      res => expect(false).toBeTruthy(),
      err => expect(err.response.badRequest).toBeTruthy()
    );
  });
});
