const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

// create connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // insert user data into the database
  connection.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Error registering user' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});