const mongoose = require("mongoose")
let ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema(
    {
        userId:{
            type:ObjectId,
            ref:'userSchema'
        },
        productId:{
            type:ObjectId,
            ref: 'productSchema'
        },
        amount:Number,
        date:String,
        isFreeAppUser:Boolean
    }
)
module.exports = mongoose.model('orderSchema',orderSchema)