// const express = require('express');
// const app = express();
// // const connectDB = require('../database/db');
// const cors = require('cors');
// const morgan = require('morgan');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const mongoose = require('mongoose');
// const helmet = require('helmet');

// app.use(cors());
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));
// app.use('/api/category', categoryRoutes);
// app.use('/api/product', productRoutes);
// // app.use('/uploads', express.static('uploads'));


// // connectDB();

// mongoose.set('strictQuery', false);

// const connectDB = async () => {
//     try{
//         await mongoose.connect(
//             'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
//             {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             }
//         );

//         console.log('Database Connection Success');
//     } catch (err) {
//         console.log(err);
//     }
// };

// connectDB();

// const port = process.env.PORT || 3001;

// app.listen(port, () => console.log(`Listening on port ${port}`));


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const router = express.Router();
const path = require("path");

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

/* Loading the environment variables from the .env file. /
dotenv.config();
 
/ Connecting to the MongoDB database. */
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser : true, useUnifiedTopology: true}, 
    ()=>{
    console.log("connected to MongoDB")
    }
);

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);



app.listen(8800,()=>{
    console.log("Backend server is running!")
});