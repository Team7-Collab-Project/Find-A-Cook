const express = require('express');
const app = express();
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

connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
