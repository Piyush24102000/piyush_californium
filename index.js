const express = require("express")
const app = express();
const mongoose = require("mongoose")
const routes = require("./routes/routes")
app.use(express.json())

mongoose.connect("mongodb+srv://piyushtale:piyushrajutale@cluster0.t7w7ipr.mongodb.net/First")
.then((console.log("Mongoose connected")))
.catch(((err)=>console.log(err)))

app.use('/', routes)
app.listen(9000, function () {
    console.log("Server running on 9000")
}) 