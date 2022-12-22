const mw1 = function (req, res, next) {
    const ip = require("ip")
    const datetime = new Date();
    console.log(datetime);
    console.log(ip.address())
   console.log(req.originalUrl)


    next()
}
module.exports.mw1 = mw1