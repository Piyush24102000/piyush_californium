const express = require('express')
const _ = require('lodash')
const router = express.Router();

const wel = require("../src/logger/logger.js")
const hell = require("../src/util/helper")
const form = require("../src/validator/formatter")

router.get('/test-me',function(req,res){
    let x = _.fromPairs([ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
    console.log(x)
    res.send("Demo page here")
})
module.exports = router;












// wel.welcome()
    // hell.printDate()
    // hell.printMonth()
    // hell.getBatchInfo()
        // form.trim()
        // form.changetoLowerCase()
        // form.upper()