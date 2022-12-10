const express = require('express')
const router = express.Router();

router.get('/movies', function (req, res) {
    let arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(arr);
})
// router.get('/movies/:index',function(req,res){
//     let arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     let index = req.params.index
//     let max = arr.length-1 // 3
//     if(index > max){
//         res.send("Error index is beyond range")
//     }
//     else{
//         res.send(arr[index])
//     }


// })
router.get('/films/:filmId', function (req, res) {
    let obj = [{
        'id': 1,
        'name': "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    
    let filmId = req.params.filmId;
    let x = Number(filmId)
    let arr = [] //1 2 3 4 
    for (let i = 0; i < obj.length; i++) {
        arr.push(obj[i].id)
    }
    if (arr.includes(x) === true) {
        for (let j = 0; j < obj.length; j++) {
            if (obj[j].id === x) {
                res.send(obj[j])
            }
        }
    }
    else {
        res.send("No movie exists with this id")
    }
})
module.exports = router;