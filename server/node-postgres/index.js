const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MYbfMDYuzoeBKxGcMhrNfA5j9wjsN4QqBDDofXq7ZXgfJhZB1K5R9MrUQZAEGVdzUgxgFcLyzSWIXLgbtUSD2Fz00NY3BBAUN');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
  req.body.items
  [
      {
          id: 1,
          quantity: 3
      }
  ]
  stripe wants
  [
      {
          price: 1,
          quantity: 3
      }
  ]
  */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item)=> {
      lineItems.push(
          {
              price: item.id,
              quantity: item.quantity
          }
      )
  });

  const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: "http://localhost:3000/order",
      cancel_url: "http://localhost:3000/cancel"
  });

  res.send(JSON.stringify({
      url: session.url
  }));
});

app.listen(3001, () => console.log("Listening on port 3001!"));












// const express = require('express')
// const app = express()
// const mysql = require("mysql");
// const port = 3001
// const cors = require("cors");
// const morgan = require('morgan');
// const productRoutes = require('./routes/product')


// app.use(express.json());
// app.use(cors());
// app.use(morgan('dev'));
// // app.use('/api/products', productRoutes);

// // app.post('/api/products', async (productRoutes) => {

// // })

// const connection = mysql.createConnection({
//   user: "team7",
//   host: "team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com",
//   password: "SD4FindACook2022!",
//   database: "find_a_cook_db",
//   port: 5432 
// });


// app.post('/api/product', (req, res) => {
//   const formData = req.body;
//   console.log(req.body);

//   if (!formData.name || !formData.price) {
//     return res.status(400).json({ error: 'Name and price are required' });
//   }

//   // if(!formData.product_price){
//   //   return res.status(400).json({ error: 'Image required' });
//   // }

//   const newProduct = {
//     productImage: formData.productImage,
//     productName: formData.productName,
//     productDecription: formData.productDecription,
//     productPrice: formData.productPrice
//   };

//   connection.query(
//     'INSERT INTO products SET ?',
//     newProduct,
//     (error, result) => {
//       if (error) {
//         return res.status(500).json({ error: 'Failed to create product' });
//       }

//       return res.status(200).json({ message: 'Product created successfully', product: newProduct });
//     }
//   );
// });



// // app.post('/api/product', (req, res) => {
// //   // Parse the incoming request body
// //   const formData = req.body;

// //   // Validate the form data
// //   if (!formData.name || !formData.price) {
// //     return res.status(400).json({ error: 'Name and price are required' });
// //   }

// //   // Perform any necessary actions, such as creating a product in a database
// //   const newProduct = {
// //     image: formData.file_name,
// //     name: formData.product_name,
// //     description: formData.product_desc,
// //     price: formData.product_price
// //   };

// //   connection.query(
// //     'INSERT INTO products SET ?',
// //     newProduct,
// //     (error, result) => {
// //       if (error) {
// //         return res.status(500).json({ error: 'Failed to create product' });
// //       }

// //   // Return a success status code and a message confirming that the product was created
// //   return res.status(200).json({ message: 'Product created successfully', product: newProduct });
// // });

// // })


// // const db = mysql.createConnection({
// //   user: "team7",
// //   host: "team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com",
// //   password: "SD4FindACook2022!",
// //   database: "find_a_cook_db",
// //   port: 5432 
// // });


// // db.query('Select * from customers', (err, res) => {
// //   if(!err){
// //       console.log('Database Connection Successful');
// //   } else{
// //       console.log(err.message);
// //   }
// //   db.end;
// // })

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })