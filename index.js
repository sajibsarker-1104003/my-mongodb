const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students',)
.then(()=>{
  console.log("Connected Succesfully!!");
})
.catch(err=>{
  console.error("Connection Failed!!!");
})