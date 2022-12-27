let mongoose = require("mongoose")
const authSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName:String,
        mobile:String,
        emailId:String,
        password:String,
        gender:{
            type:String,
        },
        isDeleted:false,
        age:Number
    }
)

module.exports = mongoose.model('authSchema', authSchema)
