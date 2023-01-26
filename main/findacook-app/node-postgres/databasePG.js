const Client = require('pg').Pool

const client = new Client({
  user: 'team7',
  host: 'team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com',
  database: 'find_a_cook_db',
  password: 'SD4FindACook2022!',
  port: 5432,
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