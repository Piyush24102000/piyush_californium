const express = require("express")
const userSchema = require("../modals/modal")

const createBook = async function(req,res){
    let x = await userSchema.create(req.body)
    res.send(x)
}
const bookList = async function(req,res){
    let x = await userSchema.find().select({bookName:1,authorName:1})
    res.send(x)
}
const getBooksInYear = async function(req,res){
    let x = await userSchema.find({year:req.params.year})
    res.send(x)
}
const getParticularBooks = async function(req,res){
    let x = await userSchema.find(req.query)
    res.send(x)
}
const getXINRBooks = async function(req,res){
    let x = await userSchema.find({$or:[{"price.indian":"Rs1080"},{"price.indian":"Rs5080"},{"price.indian":"Rs1000"}]})
    res.send(x)
}
const getRandomBooks = async function(req,res){
    let x = await userSchema.find({totalPages:{$gte:200}})
    res.send(x)
}



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks  = getRandomBooks 