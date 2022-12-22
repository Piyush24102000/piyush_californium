const express = require("express")
const router = express.Router()
const control = require("../controller/controller")
const middle = require("../middleware/mid")

router.get("/functionUp",middle.mid,control.name)

module.exports = router