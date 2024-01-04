const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            default:null
        },
        email:{
            type:String,
            default:null
        },
        dob:{
            type:String,
            required:true
        },
        password:{
            type:String,
            minlength: 8,
            required:true,
        }
})


const User = mongoose.model('User',userSchema)

module.exports = User;