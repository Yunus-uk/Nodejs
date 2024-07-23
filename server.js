const express = require("express");
const app = express();
const port = 3000;
const config = require("./config/environments.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tickets", (req, res) => {
  res.send("Job done");
});

app.put("/submitted", (req, res) => {
  res.send("/submitted");
});

app.patch("/updated", (req, res) => {
  res.send("/updated");
});

process.env.NODE_ENV = config.development.env;
let myEnvironment = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} in the ${myEnvironment} environment `
  );
});
