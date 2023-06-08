const express = require("express")
const ouncestatus = require("../model/statusSchema")
const todostatus = require("../model/todoSchema")
const datastatus = require('../model/dataSchema')
const router = express.Router()


router.get("/ouncestatus",async (req,res)=>{
  try {
    let userData = await ouncestatus.find()
    // console.log(userData)
    res.status(200).json({userData}
      );
  } catch (error) {
  console.log(error)
  }
})
router.get("/todostatus",async (req,res)=>{
  try {
    let todoData = await todostatus.find()
    // console.log(userData)
    res.status(200).json({todoData}
      );
  } catch (error) {
  console.log(error)
  }
})
router.get("/datastatus",async (req,res)=>{
  try {
    let maildata = await datastatus.find()
    // console.log(userData)
    res.status(200).json({maildata}
      );
  } catch (error) {
  console.log(error)
  }
})
module.exports = router;