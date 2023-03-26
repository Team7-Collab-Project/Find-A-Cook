const mongoose = require('mongoose');
const {OnjectId} = mongoose.Schema;

const schedules = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }, //the id assigned to a rating
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'UserSchema',
            required: true,
        }, //the id of the user who is creating the rating
        cook_id: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'CookSchema',
            required: true,
        }, 
        schedule_title: {
            type: String,
            required: true,
          },
          schedule_start: {
            type: Date,
            required: true,
          }
          ,
          schedule_startTime: {
            type: Date,
            required: true,
          },
          schedule_end: {
            type: Date,
            required: true,
          },
          schedule_endTime: {
            type: Date,
            required: true,
          }
    },
    { timestamps: true }
);

const ScheduleSchema = mongoose.model('Schedule', schedules);

module.exports = ScheduleSchema;