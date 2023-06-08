const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
  },
  address: {
    type: String,
  },
})
const datastatus = mongoose.model('datastatus', dataSchema)

module.exports = datastatus;