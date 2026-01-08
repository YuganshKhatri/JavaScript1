// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
let array=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if(element==30) break;
//     console.log(element)
// }
// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array[0].length;j++){
//         console.log(`Element at [${i}][${j}] is ${array[i][j]}`)
//     }
// }
// for(let i=1;i<=10;i++){
//     console.log(`Table of ${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(`${i}*${j}=${i*j}`)
//     }
//     console.log("\n")
// }
// let index=1
// while(index<10){
//     console.log(index)
//     index++
// }
// let score=11
// do{
//     console.log(score)
//     score++
// }while(score<=10)
// do{
//     console.log("Not Running")
// }while(!false)

let ObjectArray=[
    {
        email:"yuagnsh@google.com",
        name:"Yugansh"
    },
    {
        email:"Khatri@google.com",
        name:"Khatri"
    }
]
// for(const index of ObjectArray){
//     console.log(`Details -> email-${index.email} and name-${index.name}`)
// }
// let arraynum=[10,20,340,560]
// for(const i of arraynum){
//     console.log(i)
// }
ObjectArray.forEach((item) =>{
    console.log(item.name)
})