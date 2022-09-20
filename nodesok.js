const express = require("express");
const app = express();

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  user.push(user);
});

app.listen(3000);
