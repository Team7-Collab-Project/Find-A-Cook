const express = require('express')
const app = express()
const mysql = require("mysql");
const port = 3001
const cors = require("cors");
const morgan = require('morgan');
const productRoutes = require('./routes/product')

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/products', productRoutes);

// app.post('/api/products', async (productRoutes) => {

// })


app.post('/api/product', (req, res) => {
  // Parse the incoming request body
  const formData = req.body;

  // // Validate the form data
  // if (!formData.name || !formData.price) {
  //   return res.status(400).json({ error: 'Name and price are required' });
  // }

  // Perform any necessary actions, such as creating a product in a database
  const newProduct = {
    image: formData.image,
    name: formData.name,
    description: formData.description,
    price: formData.price
  };

  // Return a success status code and a message confirming that the product was created
  return res.status(200).json({ message: 'Product created successfully', product: newProduct });
});



const db = mysql.createConnection({
  user: "team7",
  host: "team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com",
  password: "SD4FindACook2022!",
  database: "find_a_cook_db",
  port: 5432 
});


db.query('Select * from customers', (err, res) => {
  if(!err){
      console.log('Database Connection Successful');
  } else{
      console.log(err.message);
  }
  db.end;
})

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})