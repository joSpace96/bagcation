const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("start server");
});

app.get("/", (req, res) => {
  res.send("Hi");
});
