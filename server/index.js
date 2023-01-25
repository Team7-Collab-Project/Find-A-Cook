const express = require('express');
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "12345678",
  database: "test_db"
});

app.listen("3001", () => {
  console.log("running server")
})

app.post('/register', (req, res)=> {
  db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [user, password, email], (err, result)=> {
    console.log(err);
  })
})


// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '12345678',
//   database: 'test_db'
// });

// router.post('/api/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Insert the new user into the database
//       const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
//       connection.query(query, (err, results) => {
//         if (err) {
//           return res.status(500).send(err);
//         }
//         res.send({ message: 'User registered successfully' });
//       });
//     } catch (err) {
//       res.status(500).send(err);
//     }
// });

// router.post('/api/login', (req, res) => {
//     const { email, password } = req.body;
  
//     // Select the hashed password from the database for the entered email
//     const query = `SELECT password FROM users WHERE email = '${email}'`;
//     connection.query(query, (err, results) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
  
//       if (results.length > 0) {
//         // Compare the entered password with the hashed password
//         bcrypt.compare(password, results[0].password, (err, isMatch) => {
//           if (err) {
//             return res.status(500).send(err);
//           }
  
//           if (isMatch) {
//             // Password is correct
//             // You can now create a session or a token to keep the user logged in
//           } else {
//             // Password is incorrect
//             return res.status(401).send('Email or password is incorrect');
//           }
//         });
//       } else {
//         // User with the entered email does not exist
//         return res.status(401).send('Email or password is incorrect');
//       }
//     });
//   });


// module.exports = router;
// app.use(router);
// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });