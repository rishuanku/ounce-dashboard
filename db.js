const mongoose = require("mongoose")
const mongoURI = process.env.MONGOURI

const mongoDB =async()=>{
  await mongoose.connect(mongoURI).then(async(err,res)=>{
    console.log("db success");
  }).catch((err=>console.log(err)))
}


module.exports = mongoDB;