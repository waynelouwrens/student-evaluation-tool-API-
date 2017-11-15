const mongoose = require('../config/database')
const { Schema } = mongoose
const evaluations = require('./evaluation').schema


const studentSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
  evaluations: [evaluations],
});

module.exports = mongoose.model('students', studentSchema)
