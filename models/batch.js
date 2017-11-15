const mongoose = require('../config/database')
const { Schema } = mongoose
const students = require('./student').schema

const batchSchema = new Schema({
  batchNumber: { type: Number, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  students: [students],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('batches', batchSchema)
