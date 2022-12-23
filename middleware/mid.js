const productSchema = require('../modals/productModal')
const orderSchema = require("../modals/orderModal")
const userSchema = require("../modals/userModal")

const user = function (req, res, next) {
   const header = req.headers
   if (header.isfreeappuser == null) {
      return res.send("Request is missing a mandatory header")
   }
   else {
      next()
   }

}
const order = async function (req, res, next) {
   let userId = req.body.userId
   let prodId = req.body.productId
   let x = await userSchema.findOne({ _id: userId })
   let y = await productSchema.findOne({ _id: prodId })

   if (x == null) {
      return res.send("User is not valid")
   }
   if (y == null) {
      return res.send("Product is not valid")
   }

   const header = req.headers

   if (header.isfreeappuser == 'true') {
      req.body.amount = 0
      req.body.isFreeAppUser = true
   }
   else {
      let x = await productSchema.findOne({ _id: prodId }).select({ price: 1, _id: 0 })
      let y = await userSchema.findOne({ _id: userId }).select({ balance: 1, _id: 0 })
     console.log(y.balance) ///Here find will not get the value , so use findOne 
      
      let userBalance = y.balance - x.price //100000 - 50000
      console.log(userBalance)
      await userSchema.findOneAndUpdate({ _id: userId }, { $set: { balance: userBalance } }, { new: true })
     
      req.body.amount = x.price
      req.body.isFreeAppUser = false
   }
   next()
}
module.exports.user = user
module.exports.order = order