const express = require("express")
const router = express.Router()
const control = require("../controller/controller")

router.post("/createCustomer",control.createCustomer)
router.post("/createCard",control.createCard)
router.get('/getCard',control.getCard)
router.get('/getCustomer',control.getCustomer)
router.get('/deleteCustomer',control.deleteCustomer)
router.get('/getAllCustomer',control.getAllCustomer)
module.exports = router