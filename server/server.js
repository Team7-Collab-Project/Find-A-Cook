const app = require('express')();
const port = 5001;
const cors = require("cors");
require('./config/db')

const UserRouter = require('./api/User');


const bodyParser = require('express').json;
app.use(bodyParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))


app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})