const app = require('express')();
const port = 5001;
require('./config/db')

const UserRouter = require('./api/User');


const bodyParser = require('express').json;
app.use(bodyParser());


app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})