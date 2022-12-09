function printDate(){
    const date = new Date()
    console.log(date.getDate())
}
function printMonth(){
    const date = new Date()
    console.log(date.getMonth()+1)
}
function getBatchInfo(){
    console.log("Californium W3D4 Node modules")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
