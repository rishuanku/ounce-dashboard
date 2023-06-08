const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  subdesc: {
    type: String,
  },
})
const todostatus = mongoose.model('todostatus', todoSchema)

module.exports = todostatus;