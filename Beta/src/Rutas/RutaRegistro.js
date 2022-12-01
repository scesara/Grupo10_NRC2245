// const express = require("express");

// const router = express.Router();

// const taskModel = require("../models/task");



// router.get("/", async (req, res) => {

//      const tasks = await taskModel.find();

//      console.log(tasks);

//      res.json(tasks);
//     res.send('')
// });



// router.post("/", async (req, res) => {

//     const {title, description} = req.body

//     const task = new taskModel({title, description})  



//     await task.save()



//     console.log(task);

//     res.json({status:"received"});

// });



// router.put("/:id", async (req, res) => {

//     const {title, description} = req.body

//     const newTask = {title, description}



//     await taskModel.findByIdAndUpdate(req.params.id, newTask)



   

//     res.json({status:"updated"});

// });



// router.delete("/:id", async (req, res) => {

   

//     await taskModel.findByIdAndRemove(req.params.id)    

//     res.json({status:"deleted"});

// });



// router.get("/:id", async (req, res) => {

//     const task = await taskModel.findById(req.params.id);

//     res.json(task);

// });



// module.exports = router;