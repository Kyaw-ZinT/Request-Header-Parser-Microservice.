const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
require("dotenv").config();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Request Header Parser API is running");
});

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers["x-forwarded-for"] || req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({ ipaddress: ip, language: language, software: software });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log("App is running on localhost:" + PORT);
});
