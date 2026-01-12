// console.log(Object.getOwnPropertyDescriptor(Math,'PI'))
// Object.defineProperty(Math,'PI',{
//     writable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Math,'PI'))
const user={
    username:"Username",
    email:"Username@google.com",
    Password:"000"
}
console.log(Object.getOwnPropertyDescriptor(user,'username'))
user.username="useME"
console.log(Object.getOwnPropertyDescriptor(user,'username'))
Object.defineProperty(user,'username',{
    writable:false
})
user.username="username"
console.log(Object.getOwnPropertyDescriptor(user,'username'))
Object.defineProperty(user,'username',{
    writable:true
})
user.username="username"
console.log(Object.getOwnPropertyDescriptor(user,'username'))
// for (let [key,value] of Object.entries(user)) {
//     console.log(`${key}:${value}`)
// }
// Object.defineProperty(user,'username',{
//     writable=false
// })