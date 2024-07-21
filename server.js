const express = require("express");
const app = express();

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

app.listen(3000);
