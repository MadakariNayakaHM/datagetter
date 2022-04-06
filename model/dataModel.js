const mongoose =require('mongoose');
const validator=require('validator');
const DataScheema = mongoose.Schema({
    name:{type:String,
    required:true},
    email:{type:String,
    validate:[validator.isEmail],
    unique:true},
   
    opinion:{type:String,
    required:true}
})

const Data= mongoose.model('Data',DataScheema);
module.exports=Data;