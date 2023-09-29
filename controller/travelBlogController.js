const express = require('express');
const TravelUser = require('../model/TravelUser');
const router = express.Router();

//INDEX
router.get ("/", async (req,res) =>{
     try{
        res.json(await TravelUser.find())
     }catch(error){
        res.status(400).json(error)
     }
})

//DELETE
router.delete("/:id", async(req,res) =>{
    try {
        res.json(await TravelUser.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

//UPDATE
router.post("/update/:id", async (req,res) =>{
    try{
        res.json(await TravelUser.findByIdAndUpdate(req.params.id, req.body,{ new:true}))
    }catch{
        req.status(400).json(error)
    }
})

//CREATE
router.post("/", async (req,res) => {
    try {
        res.json( await TravelUser.create(req.body))
    }catch (error){
        res.status(400).json(error)
    }
})

//SHOW
router.get("/:id", async (req,res)=>{
    try{
        res.json(await TravelUser.findById(req.params.id));
    }catch (error){
        res.status(400).json(error)
    }
})
module.exports = router;