const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('../database/db');
const UserSchema = require('./schema/UserSchema')

connectDB();

// const UserSample = mongoose.model('UserSample', UserSchema);
const UserSample = mongoose.model('Users', UserSchema.schema);


const sampleUser = new UserSample({
    _id: new mongoose.Types.ObjectId(),
    user_first_name: 'John',
    user_last_name: 'Doe',
    user_phone_number: '1234567890',
    user_email: 'johndoe@example.com',
    user_password: 'password',
    user_birthday: new Date(),
    address_id: '5e84a3624d80ce4de084c4b7'
});

sampleUser.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Sample user document saved successfully!');
    }
});



const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));