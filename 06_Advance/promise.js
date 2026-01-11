// const promiseOne=new Promise(function(resolve, reject){
//     //Do an async Task
//     //DB calls,cryptography
//     setTimeout(function(){
//         console.log('Task is complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task 2 promise")
// })
// const promiseThree=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Yugansh",email:"Yugansh@google.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error =true
//         if(!error){
//             resolve({username:"Yugansh",password:"123"})
//         }
//         else{
//             reject("Error:Something went wrong")
//         }
//     },1000)
// })

// promiseFour.
// then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("Work Done"))

// const promiseFive=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"khatri",email:"Yugansh@google.com"})
//         }
//         else{
//             console.log("Error:Went Wrong")
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//     const response=await promiseFive
//     console.log(response)
// }
// consumePromiseFive()

// async function getalldetails(){
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error:",error)
//     }
// }
// getalldetails()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log("Error:",error))