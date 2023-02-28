const mongoose = require('mongoose');
<<<<<<< HEAD
<<<<<<< HEAD
=======
mongoose.set('strictQuery', false);
>>>>>>> 19105-menu-item-creation
=======
mongoose.set('strictQuery', false);
>>>>>>> c7467d075cb1372ecbe6148adf9de982635ba938

const connectDB = async () => {
    try{
        await mongoose.connect(
<<<<<<< HEAD
            'mongodb+srv://Team7:<password>@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
=======
            'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
<<<<<<< HEAD
>>>>>>> 19105-menu-item-creation
=======
>>>>>>> 6610151c7 (Create API for making post requests)
>>>>>>> c7467d075cb1372ecbe6148adf9de982635ba938
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Database Connection Success');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;