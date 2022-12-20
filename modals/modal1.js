let mongoose = require("mongoose")
let autoIncrement = require('mongoose-auto-increment');

let connection = mongoose.createConnection("mongodb+srv://piyushtale:piyushrajutale@cluster0.t7w7ipr.mongodb.net/First")

const kisanCard = new mongoose.Schema(
    {
        cardType: String,
        customerName : String,
        status : {
            type: String,
            default : "Active"
        },
        vision : String,
        customerId : String,
        isDeleted  : {
            type: Boolean,
            default : false
        }
    }
)
autoIncrement.initialize(connection)
kisanCard.plugin(autoIncrement.plugin,{model:'kisanCard',field:'cardNumber'})

module.exports = mongoose.model('kisanCard', kisanCard)
