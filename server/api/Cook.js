const express = require('express');
const router = express.Router();

const Cook = require('./../models/Cook')
const nodemailer = require('nodemailer');
const {v4:uuid} = require("uuid");

require('dotenv').config();

const bcrypt = require('bcrypt');
const path = require("path");
const { builtinModules } = require('module');

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
    const { cook_email, cook_first_name, cook_last_name, cook_password, cook_birthday } = req.body;

    if ( !cook_email || !cook_first_name || !cook_last_name || !cook_password || !cook_birthday) {
        return res.status(400).send('All fields are required');
    }

    if (!passwordPattern.test(cook_password)) {
        return res.status(400).send('Password must be at least 8 characters and contain at least one number and one speactail character');
    }

    if (!emailPattern.test(cook_email)) {
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
                cook_email: cook_email,
                cook_password: hash,
                cook_birthday: cook_birthday,
                cook_bio: "This is the cooks bio",
                description: "This is the cooks Description",
                date_joined: currentDate,
                specialties: [],
                verified: false,
                profile_picture: "profile picture",
                cook_address: "cooks address",
                application_status: "pending",
                
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
                    message: "An error occured!",
                })
            })
        });
    });
});

router.post('/cooksignin', (req, res) => {
    const { cook_email, cook_password } = req.body;

    if( !cook_email || !cook_password) {
        res.json({
            status: "FAILED",
            message: "Empty credentials provided",
        })
    } else {
        Cook.find({cook_email})
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
            firstn: `${cook.cook_first_name}`,
            lastn: `${cook.cook_last_name}`,
            special: `${cook.specialties}`,
            descrip: `${cook.description}`,
            profile: `${cook.profile_picture}`,
            bio: `${cook.cook_bio}`
        })
    } else {
        res.json({
            status: "FAILED",
            message: "Error finding user"
        })
    }
});

router.get("/allcooks", async (req, res) => {
    try {
      const cooks = await Cook.find({}, { cook_first_name: 1, cook_last_name: 1, profile_picture: 1, application_status: 1, cook_bio: 1, description: 1, _id: 1,specialties: 1 });
  
      res.json({
        status: "SUCCESS",
        cooks: cooks,
      });
    } catch (err) {
      res.json({
        status: "FAILED",
        message: "Error retrieving cooks",
        error: err,
      });
    }
  });
  

router.put("/editprofile", (req, res) => {
    const { cook_first_name, cook_last_name, specialties, description, profile_picture, cook_bio } = req.body;
    const cook = req.session.cook;
  
    if (cook) {
      Cook.updateOne(
        { _id: cook._id },
        {
          $set: {
            cook_first_name: cook_first_name,
            cook_last_name: cook_last_name,
            specialties: specialties,
            description: description,
            profile_picture: profile_picture,
            cook_bio: cook_bio,
          },
        }
      )
        .then((result) => {
          res.json({
            status: "SUCCESS",
            message: "Profile updated successfully",
          });
        })
        .catch((err) => {
          res.json({
            status: "FAILED",
            message: "Error updating profile",
            error: err,
          });
        });
    } else {
      res.json({
        status: "FAILED",
        message: "Not authorized to edit profile",
      });
    }
  });


  

module.exports = router;
// router.post('cooklogout', (req, res) => {

// })