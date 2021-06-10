
const express = require("express");
const router = new express.Router();
const Student = require("../db/models/students");
//create a new student
// router.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

//   user.save().then(() => {
//     res.status(201).send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })

//   // res.send("hello from the other side");
// })


router.post("/Students", async (req, res) => {
    const user = new Student(req.body);
  
    try {
      console.log(req.body);
      const createUser = await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  })
  
  
  
  // read the data of registration students
  
  router.get("/Students", async (req, res) => {
  
    try {
      const studetnsDate = await Student.find();
      res.send(studetnsDate);
    } catch (e) {
      res.send(e);
    }
  })
  
  
  router.get("/Students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      // console.log(req.params.id);
      // res.send(req.params.id);
      const studentData = await Student.findById(_id);
  
      res.send(studentData);
      console.log(studentDate);
      // if(!studentData){
      //   return res.status(404).send();
      // }else{
      //  return res.send(studentData);
      // }
    } catch (e) {
      res.send(e);
    }
  })
  
  // Update the students by id
  router.patch("/Students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
        new: true
      });
      res.send(updateStudents);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  
  
  //Delete the data
  router.delete("/Students/:id", async (req, res) => {
    try {
  
      const deleteStudents = await Student.findByIdAndDelete(req.params.id);
      if(!req.params.id){
        return res.status(404).send();
      }
      res.send(deleteStudents);
    } catch (e) {
      res.status(500).send(e);
    }
  })
  

 module.exports = router;