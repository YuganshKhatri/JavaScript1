const user={
    username:"Yugansh",
    phone:7890123456,
    email:"Yugansh@google.com",
    getUserDetails:function(){
        // console.log(`Username:${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
console.log(user.getUserDetails())