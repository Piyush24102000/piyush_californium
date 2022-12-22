const express = require("express")
const authorSchema = require("../modals/author")
const book = require("../modals/book")
const publisherSchema = require("../modals/publisher")

const createAuthor = async function (req, res) {
    let x = await authorSchema.create(req.body)
    res.send(x)
}
const createPublisher = async function (req, res) {
    let x = await publisherSchema.create(req.body)
    res.send(x)
}
const createBook = async function (req, res) {
  if(req.body.author == null){
    return res.send("Author must be present")
  }
  if(req.body.publisher == null){
    return res.send("Publisher must be present")
  }
  //Check if author is valid present or not
  let x = await authorSchema.findOne({_id:req.body.author})
  let y = await authorSchema.findOne({_id:req.body.publisher})
  if(x == null){
    res.send("Give Proper AuthorName")
  }
  if(y == null){
    res.send("Give Proper Publisher") 
  }
} 
const getBook = async function (req, res) {
    let x = await book.find().populate('author').populate('publisher')
    res.send(x)
}
////////////////////////////////////////

const updateBook = async function (req, res) {
  let x = await publisherSchema.find({name:{$in:["Penguin","Martin"]}}).select({_id:1})
  let ids = x.map(e=> e._id)
  let y = await book.updateMany({publisher:{$in:ids}},{$set:{isDeleted:true}},{new:true})
  
  res.send(ids)
}


const updateAuthor = async function (req, res) {
  let x = await authorSchema.find({rating:{$lt:3.5}}).select({_id:1})
  let ids = x.map(x=> x._id)
  let y = await book.updateMany({author:{$in:ids}},{$set:{$inc:{price:10}}},{new:true})

  res.send(y)
}

module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.updateBook = updateBook
module.exports.updateAuthor = updateAuthor