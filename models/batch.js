const mongoose = require('../config/database')
const { Schema } = mongoose
const picture = "http://mynamedppix.com/wp-content/uploads/2017/08/Cool-New-Whatsapp-Profile-Set-Name-Pictures-Online-Edit.jpg"

const evaluationSchema = new Schema({
  day: { type: Date, default: Date.now },
  evaluation: { type: Number, default: 0},
  remark: { type: String},
})

const studentSchema = new Schema({
  name: { type: String, default: "Nerdie McNerdface"},
  evaluations: [evaluationSchema],
  image_url: { type: String, default: picture },
});

const batchSchema = new Schema({
  batchNumber: { type: Number },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  students: [studentSchema],
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {usePushEach:true})

module.exports = mongoose.model('batches', batchSchema)
