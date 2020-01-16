const request = require("request");

const options = {
  method: "POST",
  url: "https://basil.eu-gb.mybluemix.net/api/cal",
  body: JSON.stringify([
    "760453cabd31724935481bf622403f63",
    "760453cabd31724935481bf622406a38"
  ])
};

request(options, (err, res, body) => {
  console.log(body);
});
