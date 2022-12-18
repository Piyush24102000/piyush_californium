const mongoose = require("mongoose")
let userSchema = new mongoose.Schema(
    {
        bookName : {
            type:String,
            required:true
        },
        price:{
            indian: String,
            european : String
        },
        year:{
            type:Number,
            default:2021
        },
        tags: [String],
        authorName:String,
        totalPages: Number,
        stockAvailable : Boolean
    }
)
module.exports = mongoose.model('bookAssign', userSchema)