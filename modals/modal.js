const mongoose = require("mongoose")

const kisanCustomer = new mongoose.Schema(
    {
        firstName:String,
        lastName: String,
        mobileNumber : String,
        DOB : Date,
        emailId : String,
        address : String,
        customerId: String,
        status : String,
        isDeleted  : {
            type: Boolean,
            default : false
        }
    }
)
module.exports = mongoose.model('kisanCustomer', kisanCustomer)
