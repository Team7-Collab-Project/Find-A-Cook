const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "team7",
  host: "team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com",
  password: "SD4FindACook2022!",
  database: "find_a_cook_db",
  port: 5432
});

app.post('/add-to-cart', (req, res)=> {
    // const itemId = req.body.itemId;
    // const orderDate = req.body.orderDate;
    // const totalAmount = req.body.totalAmount;
    // const quantity = req.body.quantity;
    // const customerId = req.body.customerId;
    
    
    //     db.query("INSERT INTO orders (id, order_date, total_amount, quantity, customer_id) VALUES (?,?,?,?,?)", [itemId, orderDate, totalAmount, quantity, customerId], (err, result)=> {
    //       console.log(err);
    //     });



    const itemId = req.body.itemId;
    const quantity = req.body.quantity;
    
    
        db.query("UPDATE orders SET quantity = quantity + ${quantity} WHERE itemId = ${itemId}", [itemId, orderDate, totalAmount, quantity, customerId], (err, result)=> {
          console.log(err);
        });
      
    });

// const Client = require('pg').Pool

// const client = new Client({
//   user: 'USERNAME',
//   host: 'HOST',
//   database: 'DATABASE',
//   password: 'PASSWORD',
//   port: PORT,
// });

// client.connect();

// client.query('Select * from customers', (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else{
//         console.log(err.message);
//     }
//     client.end;
// })