const express = require('express');
const router = express.Router();

const Cook = require('./../models/Cook')
const nodemailer = require('nodemailer');
const {v4:uuid} = require("uuid");

require('dotenv').config();

const bcrypt = require('bcrypt');
const path = require("path");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    },
});

const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

router.post('/cooksignup', (req, res) => {
    const { cook_email, cook_first_name, cook_last_name, cook_password, cook_phone, cook_birthday} = req.body;

    if ( !cook_email || !cook_first_name || !cook_last_name || !cook_password || !cook_phone || !cook_birthday) {
        return res.status(400).send('All fields are required');
    }

    if (!passwordPattern.test(cook_password)) {
        return res.status(400).send('Password must be at least 8 characters and contain at least one number and one speactail character');
    }

    if (!emailPassword.test(cook_email)) {
        return res.status(400).send('Invalid email format');
    }

    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error generating salt')
        }

        // hashing password

        bcrypt.hash(cook_password, salt, (err, hash) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error hashing password');
            }

            const currentDate = new Date();
            const cook = new Cook({
                cook_first_name: cook_first_name,
                cook_last_name: cook_last_name,
                cook_phone: cook_phone,
                cook_email: cook_email,
                cook_password: cook_password,
                cook_birthday: cook_birthday,
                cook_bio: "",
                description: "",
                date_joined: currentDate,
                specialties: [],
                verified: false,
                profile_picture: "",
                cook_address: "",
                
            });

            cook
            .save()
            .then((result) => {
                res.json({
                    status: "SUCCESS",
                    message: "successfully saved user",
                })
            })
            .catch((err) => {
                res.json({
                    status: "FAILED",
                    message: "An error occured while hashing password!",
                })
            })
        });
    });
});

router.post('cooksignin', (req, res) => {
    const { cook_email, cook_password } = req.body;

    if( !cook_email || !cook_password) {
        res.json({
            status: "FAILED",
            message: "Empty credentials provided",
        })
    } else {
        Cook.find({cook_password})
        .then(data => {
            if (data.length) {
                if (!data[0].verified) {
                    res.json({
                        status: "FAILED",
                        message: "You have not been verified yet, please await a response from our team"
                    })
                } else {
                    const hashedPassword = data[0].cook_password;
                    bcrypt.compare(cook_password, hashedPassword).then(result => {
                        if (result) {
                            req.session.cook = data[0];
                            console.log(req.session.cook)

                            res.json({
                                status: "SUCCESS",
                                message: "Successfully logged in",
                            })
                        } else {
                            res.json({
                                status: "FAILED",
                                message: "Invalid password entered"
                            })
                        }
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while comparing passwords"
                        })
                    })
                }
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials entered"
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

router.get("/cookinfo", (req, res) => {
    console.log(req.session)
    const cook = req.session.cook;
    if(cook) {
        res.json({
            status: "SUCCESS",
            message: `${cook.cook_first_name}`
        })
    } else {
        res.json({
            status: "FAILED",
            message: "Error finding user"
        })
    }
});

// router.post('cooklogout', (req, res) => {

// })