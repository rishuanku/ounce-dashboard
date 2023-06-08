require('dotenv').config()
const express = require('express')
const mongoDB = require("./db")
const cors = require("cors")

const app = express();
app.use(cors());
const PORT = 5000;
mongoDB()
app.use(express.json())
app.use('/api',require("./router/displaydata"))
app.listen(PORT,()=>{
  console.log("port success")
})