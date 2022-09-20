const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  user.push(user);
  res.status(201).send();
  bcrypt.hash(salt + 'password')
});

app.listen(3000);
