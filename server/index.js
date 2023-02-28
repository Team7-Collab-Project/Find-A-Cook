const express = require('express');
const app = express();
<<<<<<< HEAD
const connectDB = require('../database/db');
=======
// const connectDB = require('../database/db');
const cors = require('cors');
const morgan = require('morgan');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
// app.use('/uploads', express.static('uploads'));


// connectDB();

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Database Connection Success');
    } catch (err) {
        console.log(err);
    }
};
>>>>>>> 19105-menu-item-creation

connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
<<<<<<< HEAD
// const mysql = require("mysql");
// const cors = require("cors");

// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')

// const bcrypt = require('bcrypt')
// const saltRounds = 10

// app.use(express.json());
// app.use(cors({
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST"],
//   credentials: true
// }));
// app.use(cookieParser())
// app.use(bodyParser.urlencoded({extended: true}));

// app.use(session({
//   key: "userId",
//   secret: "subscribe_to_findacook",
//   resave: false,
//   saveUninitialized: "false",
//   cookie: {
//     expires: 60 * 60 * 24,
//   }
// }))

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "12345678",
//   database: "test_db",
// });


// app.post('/register', (req, res)=> {
//   const name = req.body.name
//   const email = req.body.email
//   const password = req.body.password


//   bcrypt.hash(password, saltRounds, (err, hash) => {

//     if (err) {
//       console.log(err)
//     }


//     db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hash], (err, result)=> {
//       console.log(err);
//     });
//   })
// });

// app.get("/login", (req, res)=> {
//   if (req.session.user) {
//     res.send({loggedIn: true, user: req.session.user});
//   } else {
//     res.send({ loggedIn: false});
//   }
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.clearCookie("userId");
//   res.send({ message: "Successfully logged out" });
// });

// app.post('/login', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password

//   db.query("SELECT * FROM users WHERE email = ?;", email, (err, result)=> {
//     if (err) {
//       res.send({err: err})
//     } 


//     if (result.length > 0){
//       bcrypt.compare(password, result[0].password, (error, response) => {
//         if (response) {
//           req.session.user = result
//           console.log(req.session.user)
//           res.send(result)
//         } else {
//           res.send({ message: "Wrong username/password combination"})
//         }
//       })
//     } else {
//       res.send({ message: "User doesn't exist"})
//     }
    
//   });
// });

// app.listen("3001", () => {
//   console.log("running server")
// });


=======
>>>>>>> 19105-menu-item-creation
