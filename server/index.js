const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

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

  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (results.length > 0) {
      // User exists and password is correct
      // You can now create a session or a token to keep the user logged in
    } else {
      // User does not exist or password is incorrect
      return res.status(401).send('Email or password is incorrect');
    }
  });
});


module.exports = router;