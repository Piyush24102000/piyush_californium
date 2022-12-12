const express = require("express")
const app  = express();
const routes = require("./routes/routes")

app.use('/',routes)
app.listen(9000,function(){
    console.log("Server running on 9000")
})