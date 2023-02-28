const mongoose = require('mongoose');
<<<<<<< HEAD
=======
mongoose.set('strictQuery', false);
>>>>>>> 19105-menu-item-creation

const connectDB = async () => {
    try{
        await mongoose.connect(
<<<<<<< HEAD
            'mongodb+srv://Team7:<password>@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
=======
            'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
>>>>>>> 19105-menu-item-creation
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