let name="Yugansh"
let anothername=name
// console.table([name, anothername])
anothername="Khatri"
// console.table([name, anothername])
let Userone={
    email:"Yugansh@google.com",
    upiId:"Number@ybl"
}
let Usertwo=Userone
console.table([Userone.email, Userone.upiId])
Usertwo.email="Khatri@gmail.com"
console.table([Userone.email, Userone.upiId])
