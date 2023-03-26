const router = require("express").Router();
const Event = require("../models/Event");
const moment = require("moment");

router.post("/addevent", async (req, res) =>{
    const event = Event(req.body);
    await event.save();
    res.sendStatus(201);
})

router.get("/getevents",async (req,res) => {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate()},
        end: {$lte: moment(req.query.end).toDate()},
    });

    res.send(events);
})

module.exports = router;
/*const Schedule = require('../schema/ScheduleSchema');
const fs = require('fs');

exports.readAll = async (req, res) => {
    try {
      const schedules = await Schedule.find({}).populate('', 'category_name');
      res.status(200).json(products);
    } catch (err) {
      console.log('Product ReadAll Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };


  exports.read = async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);

      res.json(product);
      console.log(product);
    } catch (err) {
      console.log('Product Read Error: ', err);
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
  };*/