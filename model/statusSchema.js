const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
  count: {
    type: String,
  },
  desc: {
    type: String,
  },
})
const ouncestatus = mongoose.model('ouncestatus', statusSchema)

module.exports = ouncestatus;