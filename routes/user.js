
const express=require('express');
const path=require('path');

const router=express.Router();

router.use('/user',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','user.html'));
});

module.exports=router;