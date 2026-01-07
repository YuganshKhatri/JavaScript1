function one(){
    const firstname="Yugansh"
    function two(){
        const lastname="Khatri"
        // console.log("Firstname:",firstname);
    }
    // console.log(lastname);
    two()
}
one()
console.log(addone(5)); // can call this function addone before initialization as well no error in this

function addone(num){
    return num+1
}
console.log(addtwo(5)); // Cannot call this add two function before its initialization because it is defined in a little different way like an expression and we cannot call the fucntions defined like these before their actual declaration (Hoisting)

const addtwo=function(num){
    return num+2
}