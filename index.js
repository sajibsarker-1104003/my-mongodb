const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students',)
.then(()=>{
  console.log("Connected Succesfully!!");
})
.catch(err=>{
  console.error("Connection Failed!!!");
});

// Schema=> Define the shape of the document

const studentSchema=new mongoose.Schema({
  firstName:String,
  lastName:String,
  dob:Date,
  entryDate:{type:Date,default:Date.now},
  passed:Boolean,
  hobbies:[String],
  parents:{
    father:String,
    mother:String,

  },
  subjects:[{
    name:String,
    subjectCode:Number,
    marks:{type:Number,min:0,max:100}
  }]

})