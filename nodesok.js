const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async(req, res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = { email: req.body.email, password: req.body.password };
        user.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send;
    }
});

app.post("/users/login", async(req, res) => {
    const user = users.find(user => user.email = req.body.email);
    if(user == null){
        return res.status(400).send('email ');
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('success');
        } else {
            res.send('user or password incorrect');
        };
    } catch {
        res.status(500).send();
    }
});

app.listen(3000);
