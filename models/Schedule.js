const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  faculty: { type: String, required: true },
  room: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);