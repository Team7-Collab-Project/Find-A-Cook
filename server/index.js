const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require('nodemailer');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const crypto = require('crypto');

const bcrypt = require('bcrypt');
const saltRounds = 10

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  key: "userId",
  secret: "subscribe_to_findacook",
  resave: false,
  saveUninitialized: "false",
  cookie: {
    expires: 60 * 60 * 24,
  }
}))

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "test_db",
});

app.post('/register', (req, res)=> {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password


  bcrypt.hash(password, saltRounds, (err, hash) => {

    if (err) {
      console.log(err)
    }


    db.query("INSERT INTO users (name, email, password, usertype) VALUES (?,?,?,?)", [name, email, hash, "guest"], (err, result)=> {
      console.log(err);
    });
  })
});

app.get("/login", (req, res)=> {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({ loggedIn: false});
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("userId");
  res.send({ message: "Successfully logged out" });
});

app.get("/cook", (req, res, next) => {
  if (!req.session.user || req.session.user[0].usertype !== "cook") {
    return res.status(401);
  }
  next();
});

app.get("/userinfo", (req, res) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.send({ message: "No user information found" });
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result)=> {
    if (err) {
      res.send({err: err})
    } 


    if (result.length > 0){
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result
          console.log(req.session.user)
          res.send(result)
        } else {
          res.send({ message: "Wrong username/password combination"})
        }
      })
    } else {
      res.send({ message: "User doesn't exist"})
    }
    
  });
});

app.listen("3001", () => {
  console.log("running server")
})
