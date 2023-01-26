const Client = require('pg').Pool

const client = new Client({
  user: 'USERNAME',
  host: 'HOST',
  database: 'DATABASE',
  password: 'PASSWORD',
  port: PORT,
});

client.connect();

client.query('Select * from customers', (err, res) => {
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
})