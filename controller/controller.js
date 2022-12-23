const express = require("express")
const productSchema = require('../modals/productModal')
const userSchema = require("../modals/userModal")
const orderSchema = require("../modals/orderModal")

const createProduct = async function(req,res){
   let x = await productSchema.create(req.body)
   res.send(x)
}

const createUser = async function(req,res){
    let x = await userSchema.create(req.body)
    res.send(x)
 }

 
const createOrder = async function(req,res){
    let x = await orderSchema.create(req.body)
    res.send(x)
 }
 
module.exports.createUser = createUser
module.exports.createProduct = createProduct
module.exports.createOrder = createOrder