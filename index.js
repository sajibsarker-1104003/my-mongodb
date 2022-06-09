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
  dob:{
    type:Date,
    validate:{
      validator:(value)=>value>new Date("1 January 1995"),
      message:"Date must be after 1 January 1995"
    }
  },
  entryDate:{type:Date,default:Date.now},
  passed:Boolean,
  hobbies:{
    type:Array,
    of:String,
    validate:{
      validator:(value)=>value.length>0,
      message:"There must be at least 1 hobby"
    }
  },
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
  hobbies:[],
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

