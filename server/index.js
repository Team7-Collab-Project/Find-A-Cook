const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const {Client} = require("pg");
const dotenv = require("dotenv")
dotenv.config()

const connectDb = async () => {
      try {
          const client = new Client({
              user: process.env.PGUSER,
              host: process.env.PGHOST,
              database: process.env.PGDATABASE,
              password: process.env.PGPASSWORD,
              port: process.env.PGPORT
          })
   
          await client.connect()
          const res = await client.query('SELECT * FROM customers')
          console.log(res)
          await client.end()
      } catch (error) {
          console.log(error)
      }
  }
   
  connectDb()

router.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
      connection.query(query, (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.send({ message: 'User registered successfully' });
      });
    } catch (err) {
      res.status(500).send(err);
    }
});

router.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    // Select the hashed password from the database for the entered email
    const query = `SELECT password FROM users WHERE email = '${email}'`;
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      if (results.length > 0) {
        // Compare the entered password with the hashed password
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
          if (err) {
            return res.status(500).send(err);
          }
  
          if (isMatch) {
            // Password is correct
            // You can now create a session or a token to keep the user logged in
          } else {
            // Password is incorrect
            return res.status(401).send('Email or password is incorrect');
          }
        });
      } else {
        // User with the entered email does not exist
        return res.status(401).send('Email or password is incorrect');
      }
    });
  });


module.exports = router;