const express = require('express')
const router = express.Router();

router.get('/demo', function (req, res) {
    let arr = [33, 34, 37, 38]
    let x = Math.max(...arr)
    let y = Math.min(...arr)
    let temp = []
    for(let i = y; i<x ; i++){ // 1 - 7
        if(arr.includes(i)  === false){
            // res.send({data:i})
             temp.push(i)
        
        }
    }
    res.send(`${temp}`)
})
module.exports = router;