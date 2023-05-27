const express = require("express");
const app = express();
const passport = require("passport");

const cors = require("cors");

app.use(cors());
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("hi");
});

const authRouter = require("./routes/OAuth/auth");

app.use("/auth", authRouter);

app.listen(5500, () => {
  console.log("app listening on port 5500!");
});
