const { Client } = require('pg');

const client = new Client({
  user: 'team7',
  host: 'team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com',
  database: 'find_a_cook_db',
  password: 'SD4FindACook2022!',
  port: 5432, // default port for postgresql
});

client.connect()
.then(() => {
  console.log('Connected to PostgreSQL')
  // test connection by running a simple query
  return client.query('SELECT 1')
})
.then(res => console.log(res.rows[0]))
.catch(err => console.error('Error connecting to PostgreSQL', err.stack))
.finally(() => client.end())