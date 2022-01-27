const express=require('express');
const router=express.Router();
const {deleteEmp,updateEmp,addData,getData} =require('../Controller/emp_controller');
router.post("/post",(req,res)=>{
    let data=addData(req.body)
    res.send(data);
})
router.get("/get",(req,res)=>{
    let data=getData()
    res.send(data);
})
router.put("/put",(req,res)=>{
    let data=updateEmp(req.body)
    res.send(data);
})
router.delete("/del",(req,res)=>{
    let data=deleteEmp(req.body)
    res.send(data);
})

module.exports=router;