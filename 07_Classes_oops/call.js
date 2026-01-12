function setUsername(username){
    this.username=username
    console.log("Called")
}
function createUser(username,email,password){
    setUsername.call(this, username)
    this.email=email
    this.password=password
}
const newuser=new createUser("Yugansh","Yugansh@google.com","2134")
console.log(newuser)