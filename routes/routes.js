const express = require("express")
const router = express.Router();
const userModal = require("../modals/userModal")

router.post("/book",async function(req,res){
    let x = await userModal.create(req.body)
    res.send({msg:x})
})
router.get("/getBooks",async function(req,res){
    let y = await userModal.find()
    res.send({y})
})


module.exports = router;