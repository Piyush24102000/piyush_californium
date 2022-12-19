const mongoose = require("mongoose")

let books = new mongoose.Schema({
    name: String,
    author_id  : {
        type : Number,
        required: true
    },
    price: Number,
    ratings : Number
})

module.exports = mongoose.model('Book', books)