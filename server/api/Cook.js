const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51MYbfMDYuzoeBKxGcMhrNfA5j9wjsN4QqBDDofXq7ZXgfJhZB1K5R9MrUQZAEGVdzUgxgFcLyzSWIXLgbtUSD2Fz00NY3BBAUN');
const Cook = require('./../models/Cook')
const nodemailer = require('nodemailer');
const {v4:uuid} = require("uuid");
//const upload = require('../middleware/multer');
const MenuCategorySchema = require('./../models/MenuCategory');
const MenuItemSchema = require('./../models/Menu')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });


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
    // console.log(cook);
    if(cook) {
        res.json({
            status: "SUCCESS",
            firstn: `${cook.cook_first_name}`,
            lastn: `${cook.cook_last_name}`,
            special: `${cook.specialties}`,
            descrip: `${cook.description}`,
            profile: `${cook.profile_picture}`,
            bio: `${cook.cook_bio}`,
            email: `${cook.cook_email}`
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
  

  router.get('/menucategories', async (req, res) => {
    try {
      const menuCategories = await MenuCategorySchema.find();
      res.json({ status: 'SUCCESS', menuCategories });
    } catch (err) {
      res.json({ status: 'FAILED', message: 'Error retrieving menu categories' });
      console.log(err);
    }
  });


  router.post('/addmenuitem', upload.single('imageurls'), async (req, res) => {
    console.log(req.files);
    console.log(req.body);
    const cook = req.session.cook;
  
    if (!cook) {
      return res.json({
        status: 'FAILED',
        message: 'Not authorized to add menu items',
      });
    }
  
    const { item_name, product_description, price, category } = req.body;
    const imageurls = req.file ? req.file.path : null;
  
    try {
      const menuItem = new MenuItemSchema({
        cook_id: cook._id,
        item_name: item_name,
        product_description: product_description,
        category: category,
        imageurls: imageurls,
        price: price,
      });
  
      await menuItem.save();
      res.json({
        status: 'SUCCESS',
        message: 'Menu item added successfully',
      });
    } catch (err) {
      res.json({
        status: 'FAILED',
        message: 'Error adding menu item',
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

  router.post('/uploadprofilepicture', upload.single('profile_picture'), async (req, res) => {
    const cook = req.session.cook;
    
    if (cook) {
      const profile_picture = req.file.path;
  
      try {
        await Cook.updateOne({ _id: cook._id }, { $set: { profile_picture } });
        res.json({
          status: 'SUCCESS',
          message: 'Profile picture uploaded successfully',
          imagePath: profile_picture,
        });
      } catch (err) {
        res.json({
          status: 'FAILED',
          message: 'Error uploading profile picture',
          error: err,
        });
      }
    } else {
      res.json({
        status: 'FAILED',
        message: 'Not authorized to upload profile picture',
      });
    }
  });
  
  


  router.post('/:cookId/dish', async (req, res) => {
    try {
      const dish = new MenuItemSchema(req.body);
      dish.cook_id = req.params.cookId;
      await dish.save();
  
      // Find the cook and add the dish to their dishes array
      const cook = await Cook.findByIdAndUpdate(
        req.params.cookId,
        { $push: { dishes: dish } },
        { new: true }
      );
  
      res.status(201).json(dish);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  router.get('/:cookId', async (req, res) => {
    try {
      // Find the cook by ID and populate their dishes
      const cook = await Cook.findById(req.params.cookId).populate('dishes');
      // Return the cook's dishes
      res.json(cook.dishes);
    } catch (error) {
      // Return an error message if there is an error
      res.status(400).json({ message: error.message });
    }
  });
  
  router.post('/searchcooks', async (req, res) => {
    // Get the type (cuisine or dish) and query from the request body
    const { type, query } = req.body;
  
    try {
      let cooks;
  
      switch (type) {
        case 'cuisine':
          // Find the menu category that matches the cuisine query
          const cuisine = await MenuCategorySchema.findOne({ category_name: { $regex: new RegExp(`^${query.cuisine}$`, 'i') } });
          if (!cuisine) {
            // Return an empty response if the cuisine is not found
            return res.json({ cooks: [] });
          }
          // Find all cooks with the matching cuisine
          cooks = await Cook.find({ specialties: cuisine._id });
          console.log('Found cooks by cuisine:', cooks); // log the found cooks
          break;
        case 'dish':
          // Find all cooks with a dish that matches the dish query
          cooks = await Cook.find({ 'dishes.dish': { $regex: new RegExp(`^${query.dish}$`, 'i') } });
          console.log('Found cooks by dish:', cooks); // log the found cooks
          break;
      }
  
      // If no cooks were found, return all cooks
      if (!cooks.length) {
        cooks = await Cook.find({});
      }
  
      // Return the found cooks
      res.json({ cooks });
    } catch (err) {
      console.log(err, 'filter Controller error');
      // Return an error message if there is an error
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  });

  
  

module.exports = router;
// router.post('cooklogout', (req, res) => {

// })