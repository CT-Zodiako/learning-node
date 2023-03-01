const mongoose= require('mongoose')
const moongoseDelete = require("mongoose-delete")
const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
    },

    {
        timestamps:true, //TODO createdAt, updateAt
        versionKey: false
    }
);

StorageScheme.plugin(moongoseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('storage',StorageScheme)