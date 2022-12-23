const express = require("express")
const router = express.Router()
const control = require("../controller/controller")
const middle = require("../middleware/mid")

router.post('/createProduct',control.createProduct)
router.post('/createUser',middle.user,control.createUser)
router.post('/createOrder',middle.user,middle.order,control.createOrder)
module.exports = router