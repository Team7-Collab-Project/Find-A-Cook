const Client = require("pg").Pool;

const client = new Client({
  user: "team7",
  host: "team-db-instance.ckhr6aejbjyh.us-east-1.rds.amazonaws.com",
  password: "SD4FindACook2022!",
  database: "find_a_cook_db",
  port: 5432,
});

client.connect();

client.query(
    "Select * from products",
//   "CREATE TABLE products(id SERIAL PRIMARY KEY, file_name TEXT NOT NULL, product_name TEXT NOT NULL, product_desc TEXT, product_price NUMERIC NOT NULL, created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW())",
  (err, res) => {
    if (!err) {
      console.log("Connected To Database");
    } else {
      console.log(err.message);
    }
    client.end;
  }
);

// const query = `INSERT INTO users (id, name, price, image, desc, created_at, updated_at) VALUES ('${name}', '${email}', '${hashedPassword}')`;

// CREATE TABLE products (
//     id SERIAL PRIMARY KEY,
//     file_name TEXT NOT NULL,
//     product_name TEXT NOT NULL,
//     product_desc TEXT,
//     product_price NUMERIC NOT NULL,
//     product_category INTEGER REFERENCES categories(id) NOT NULL,
//     product_qty INTEGER NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW(),
//     updated_at TIMESTAMP DEFAULT NOW()
//   );
