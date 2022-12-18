const express = require("express")
const router = express.Router()
const control = require("../controller/controller")

router.post('/createBook',control.createBook )
router.get('/bookList',control.bookList)
router.get('/getBooksInYear/:year',control.getBooksInYear)
router.get('/getParticularBooks',control.getParticularBooks)
router.get('/getXINRBooks',control.getXINRBooks)
router.get('/getRandomBooks',control.getRandomBooks)

module.exports = router