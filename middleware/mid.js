const jwt = require("jsonwebtoken");
const mid = function(req,res,next){
  if(req.headers['x-auth-token'] == null){
    res.send("Pass the header with token")
  }
  else{
    let token = req.headers['x-auth-token'];
    let decodedToken = jwt.verify(token, "PiyushTale");{}
    if(decodedToken._id === req.params.userId){ //authentication
       next()
    }
    else{
      res.send("Invalid token ID")
    }
  }
}
module.exports.mid = mid
