const express = require('express');
const router = express.Router();

const User = require('./../models/User');

const bcrypt = require('bcrypt');

const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

router.post('/signup', (req, res) => {
    const { user_first_name, user_last_name, user_phone_number, user_email, user_password, user_birthday } = req.body;

    if (!user_first_name || !user_last_name || !user_phone_number || !user_email || !user_password || !user_birthday) {
      return res.status(400).send('All fields are required');
    }

    if (!passwordPattern.test(user_password)) {
      return res.status(400).send('Password must be at least 8 characters and contain at least one number and one special character');
    }

    if (!emailPattern.test(user_email)) {
      return res.status(400).send('Invalid email format');
    }

    // Generate a salt to use for password hashing
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error generating salt');
        }
        // Hash the password using the generated salt
        bcrypt.hash(user_password, salt, (err, hash) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error hashing password');
            }
            // Create a new user with the hashed password
            const user = new User({
                user_first_name: user_first_name,
                user_last_name: user_last_name,
                user_phone_number: user_phone_number,
                user_email: user_email,
                user_password: hash,
                user_birthday: user_birthday,
            });
            // Save the user to the database
            user.save((err, savedUser) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error saving user');
                }
                res.status(200).send(savedUser);
            });
        });
    });
});

router.post('/signin', (req, res) => {
    const { user_email, user_password } = req.body;
    
    if( !user_email || !user_password) {
        res.json({
            status: "FAILED",
            message: "Empyt credentials supplied"
        })
    } else {
        User.find({user_email})
        .then(data => {
            if (data.length) {
                const hashedPassword = data[0].user_password
                bcrypt.compare(user_password, hashedPassword).then(result => {
                    if (result) {
                        res.json({
                            status: "SUCCESS",
                            message: "Sign in succesful",
                            data: data
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered"
                        })
                    }
                }).catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing passwords"
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Ivalid credentials entered"
                })
            }
        }).catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }
})

module.exports = router;
