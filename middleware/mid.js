const mid = function(req,res,next){
    let datetime = new Date();
    let getIp = require('ip')
    console.log(datetime)
    console.log(req.ip)
    console.log(getIp.address())
    console.log(req.originalUrl)
    next()
}
module.exports.mid = mid
//2022-12-22T16:58:06.030Z
//::ffff:127.0.0.1
//192.168.0.185
///functionUp