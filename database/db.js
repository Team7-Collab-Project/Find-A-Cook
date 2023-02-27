const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        await mongoose.connect(
<<<<<<< HEAD
            'mongodb+srv://Team7:<password>@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
=======
            'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
>>>>>>> 6610151c7 (Create API for making post requests)
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