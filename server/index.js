const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require('bcrypt')
const saltRounds = 10

const app = express();

app.use(express.json());
app.use(cors());

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


    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hash], (err, result)=> {
      console.log(err);
    });
  })
});

app.post('/login', (req, res)=> {
  const email = req.body.email
  const password = req.body.password

  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result)=> {
    if (err) {
      res.send({err: err})
    } 


    if (result.length > 0){
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
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
});


