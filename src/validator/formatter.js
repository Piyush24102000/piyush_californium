function trim(){
    let str = " functionUp "
    let x = str.trim()
    console.log(x)
}
function  changetoLowerCase(){
    let str = "FUNCTIONUP"
    let x = str.toLowerCase()
    console.log(x)
}
function upper(){
    let str = "functionup"
    let x = str.toUpperCase()
    console.log(x)
}
module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.upper = upper;
