const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://Team7:oXVVWGS8BCRZB2FM@findacook.dr9enwh.mongodb.net/?retryWrites=true&w=majority',
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