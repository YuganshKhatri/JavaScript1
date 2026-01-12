// const user=function(){
//     let myName="Yugansh   "
// }
// user.prototype.truelength=function(){
//     const trueleng=this.myName.trim()
//     console.log(trueleng)
//     console.log(`True length of String is:${trueleng.length}`)
// }
// const name=new user()
// name.truelength()
// console.log(user.prototype)
// myName.prototype.truelength=function(){
//     console.log(`True Length of String is${this.myName.trim().length}`)
// }
// console.log(myName.Prototype)
// console.log(myName.length)
// console.log(myName.trim().length)
let myName="  Yugansh    "
let myName2="Khatri    "
String.prototype.truelength=function(){
    console.log(`True length of the String is:${this.trim().length}`)
}
// console.log(String.prototype)
myName.truelength()
myName2.truelength()