const express = require("express")
const customer = require("../modals/modal")
const card = require("../modals/modal1")

const createCustomer = async function(req,res){
    let x = await customer.create(req.body)
    res.send(x)
}
const createCard = async function(req,res){
    let x =  await card.create(req.body)
    res.send(x)
}
const getCustomer = async function(req,res){
    let x = await customer.find({status:"Active"})
    res.send(x)
}
const getCard = async function(req,res){
    let x = await card.find()
    res.send(x)
}
const deleteCustomer = async function(req,res){
    let x = await customer.findOneAndUpdate(req.body,{isDeleted:true},{new:true})
    res.send(x)
}
const getAllCustomer = async function(req,res){
    let x = await customer.find()
    res.send(x)
}
module.exports.createCustomer = createCustomer
module.exports.createCard = createCard
module.exports.getCustomer = getCustomer
module.exports.getCard = getCard
module.exports.deleteCustomer = deleteCustomer
module.exports.getAllCustomer = getAllCustomer
