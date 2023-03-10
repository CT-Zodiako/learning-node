const mongoose= require('mongoose')
const moongoseDelete = require("mongoose-delete")
const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:['user','admin'],
            default:'user'
        }
    },

    {
        timestamps:true, //TODO createdAt, updateAt
        versionKey: false
    }
);

UserScheme.plugin(moongoseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('users',UserScheme)