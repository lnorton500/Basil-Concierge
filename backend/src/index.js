const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  console.log("[" + new Date() + "] " + req.url);
  next();
});

app.use("/", require("./routers/core"));
app.use("/events", require("./routers/events"));
app.use("/catagories", require("./routers/catagories"));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);