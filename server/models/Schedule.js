const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },
  schedule_address: {
    type: String,
    required: true,
  }
});

const ScheduleScehma = mongoose.model('Schedule', schedules);

module.exports = ScheduleScehma;