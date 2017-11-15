const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  color: { type: String, default: "green" },
  date: { type: Date, default: Date.now },
  remark: { type: String },
});

module.exports = mongoose.model('evaluations', evaluationSchema)
