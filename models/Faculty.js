const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Faculty', FacultySchema);