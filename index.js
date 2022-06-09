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
  }],
 
})

// Mongoose Model

const Student=mongoose.model('Student',studentSchema);//class
const student=new Student({
  firstName:"Sajib",
  lastName:"Sarker",
  dob:new Date("04 January 1997"),
  passed:true,
  hobbies:["Travelling","Coding","Drawing"],
  parents:{
    father:"Sankar Sarker",
    mother:"Uma Sarker"
  },
  subjects:[{
    name:"Data Structure",
    subjectCode:301,
    marks:85
  },
  {
    name:"Algorithm",
    subjectCode:302,
    marks:90
  },
  {
    name:"AI",
    subjectCode:303,
    marks:76
  },
  {
    name:"Machine Learning",
    subjectCode:304,
    marks:83
  }]
});//Object create

student.save().then(data=>console.log(data)).catch(err=>console.log(err._message));

