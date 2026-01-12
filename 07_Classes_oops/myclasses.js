class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    ChangeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const me=new User("Yugansh","Yugansh@google.com","000")
console.log(me.encryptpassword())
console.log(me.ChangeUsername())