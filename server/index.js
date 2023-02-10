const express = require('express');
const app = express();
const connectDB = require('../database/db');
const cors = require('cors');
const morgan = require('morgan');
const categoryRoutes = require('./routes/category');

app.use(cors());
app.use(express.json());
app.use('/api/category', categoryRoutes);


connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
