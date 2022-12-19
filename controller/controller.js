const express = require("express")
const author = require("../modals/modal")
const book = require("../modals/modal1")

const createBook = async function (req, res) {
    let x = await book.create(req.body)
    res.send(x)
}
const createAuthor = async function (req, res) {
    let x = await author.create(req.body)
    res.send(x)
}
const readBook = async function (req, res) {
    let x = await author.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    let y = await book.find(x)
    res.send(y)
}
const updateBook = async function (req, res) {
    let x = await book.findOne({ name: "Two states" }).select({ author_id: 1, _id: 0 })
    let y = await author.find(x).select({author_name:1,_id:0})
    
    let a = await book.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
    res.send({ y,a})
}

const bookBetween = async function (req, res) {
    let arr = []
   let x = await book.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
   
   for(let i = 0 ; i < x.length ; i++){
        let y = await author.findOne(x[i]).select({author_name:1,_id:0})
        arr.push(y)
   }
    res.send(arr)
}

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.readBook = readBook
module.exports.updateBook = updateBook
module.exports.bookBetween = bookBetween