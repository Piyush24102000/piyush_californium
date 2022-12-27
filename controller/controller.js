const express = require("express")
const jwt = require("jsonwebtoken");
const authSchema = require("../modals/modal1")

const createUser = async function (req, res) {
    let x = await authSchema.create(req.body)
    res.send(x)
}

const loginUser = async function (req, res) {
    let email = req.body.emailId
    let pass = req.body.password
    let x = await authSchema.findOne({ emailId: email, password: pass })
    if (x == null) {
        res.send("User Does not exists!!! Please Check your details")
    }
    let token = jwt.sign({ _id: x._id }, "PiyushTale")
    res.send(token)
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
}

const getUser = async function (req, res) {
    let x = await authSchema.findById(req.params.userId)
    res.send(x)
}
const updateUser = async function (req, res) {
    let x = await authSchema.findOneAndUpdate({ _id: req.params.userId }, { $set: { age: 21 } }, { new: true })
    res.send(x)
}
const deleteUser = async function (req, res) {
    let x = await authSchema.findByIdAndUpdate({ _id: req.params.userId }, { $set: { isDeleted: true } }, { new: true })
    res.send(x)
}
module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
