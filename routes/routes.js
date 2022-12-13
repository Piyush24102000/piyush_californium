const express = require('express')
const router = express.Router();
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]


router.post('/demo', function (req, res) {
    let count = 0;
    for (let i = 0; i < players.length; i++) {
        if(players[i].name === req.body.name){
            res.send("Player already exists")
            count++;
        }
    }
    if(count === 0){
        players.push(req.body)
        res.send(players)
    }

})
module.exports = router;