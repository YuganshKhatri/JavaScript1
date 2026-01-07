const regularUser={
    email:"Yugansh@google.com",
    Username:{
        fullname:{
            firstname:"Yugansh",
            lastname:"Khatri"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.Username);
// console.log(regularUser.Username.fullname);

// console.log(regularUser.Username.fullname.firstname);
// console.log(regularUser.Username.fullname.lastname);
const tinderUser={
    id:"1234",
    name:"Yugansh",
    State:"delhi",
    Pincode:123456,
    isLoggedIn:false
}
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(Object.hasOwn("tinderUser"))

const course={
    coursename:"Java Script",
    price:"free",
    courseInstructor:"Hitesh"
}
const {courseInstructor:ci,coursename:cn,price:p}=course
// console.log(ci,cn,p);
// {
//     "name":"Yugansh",
//     "email":"Yugansh@google.com",                // JSON format -> An object Fromat but Without a Name and can also  
//     "price":"free"                               get an array consisting many objects like these without names
// }
