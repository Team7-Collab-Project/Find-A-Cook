const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "TESTDatabase",
});

app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO users (username, password) VALUES ('santos', 'password1');"
    db.query(sqlInsert, (err, res)=> {
        res.send("Hi Santos");
    })
    res.send("Hello World")
})

app.listen(3001, () => {
    console.log("running on port 3001")
})