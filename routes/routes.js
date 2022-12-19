const express = require("express")
const router = express.Router()
const control = require("../controller/controller")

router.post('/createBook',control.createBook)
router.post('/createAuthor',control.createAuthor)
router.get('/readBook',control.readBook)
router.get('/updateBook',control.updateBook)
router.get('/bookBetween',control.bookBetween)
module.exports = router