// function sayMyName(){
//     console.log("Y")
//     console.log("U")
//     console.log("G")
//     console.log("A")
//     console.log("N")
//     console.log("S")
//     console.log("H")
// }
// sayMyName()
// function Add2Num(number1,number2){ // Parameters
//     console.log(number1+number2);
// }
function Add2Num(number1,number2){ // Parameters
    return number1+number2
}
const result=Add2Num(7,7) // Arguments
// console.log(result);
function UserLoginMessage(username="Yug"){ // default username set as "Yug" if no value is passed this is used.
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} Just Logged In.`
}
// console.log(UserLoginMessage())
// console.log(UserLoginMessage("Yugansh"));

// console.table([UserLoginMessage(),UserLoginMessage("Yugansh")])
function CalculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(CalculateCartPrice(10,20,30,40,50))

const user={
    username:"Yugansh",
    price:100
}
function Description(anyObject){
    return `${anyObject.username} is the name of the User and ${anyObject.price} is cart price`
}
// console.log(Description(user));
// console.log(Description({
//     username:"Yug",
//     price:499
// }));
const myArra4=[10,20,340,230232]
function getSecondNumber(getArray){
    return getArray[1]
}
// console.log(getSecondNumber(myArra4));
// console.log(getSecondNumber([100,340,500]));



