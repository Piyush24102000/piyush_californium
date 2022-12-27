const express = require("express")
const router = express.Router()
const control = require("../controller/controller")
const middle = require("../middleware/mid")

router.post('/users',control.createUser)
router.post('/login',control.loginUser)
router.get("/users/:userId",middle.mid,control.getUser)
router.get('/updateUsers/:userId',middle.mid,control.updateUser)
router.get('/deleteUsers/:userId',middle.mid,control.deleteUser)
module.exports = router