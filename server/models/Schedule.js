const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const schedules = new mongoose.Schema({
  schedule_title: {
    type: String,
    required: true,
  },
  schedule_start: {
    type: Date,
    required: true,
  },
  schedule_end: {
    type: Date,
    required: true,
  }
});

const Schedule = mongoose.model('Schedule', schedules);

export default Schedule;