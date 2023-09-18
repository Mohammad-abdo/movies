const mongoose = require("mongoose");
const validate= require ("validator")

const UsersSchema = new mongoose.Schema({
    first_name:{
    type:String,
    min:3,
    max:30,
    required:true,
    trim:true
    },
    last_name: {
        type: String,
        min: 3,
        max: 30,
        required: true,
        trim: true 
      },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"user must have email"],
        validate:[validate.isEmail,"Please Privide A valid Email"],
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required: true,
        min: 0, 
    }
})

const Users =mongoose.model('Users',UsersSchema);

module.exports=Users