const myArray=[0,1,2,3,4,5]
// console.log(myArray[0])
const myArray2=myArray
myArray2[0]=50
// console.log(myArray[0]) // Allows Shallow copy Like Heap Original Array or Original Element Also changes it Dummy Element changes/or another array changes that is defined by that original array
// const myHeores=["Shaktimann","naagraaj"]
const myHeores=new Array("naagraaj","Shaktimann")
// console.log(myArray)
// console.log(myArray2)
// console.log(myHeores)
myHeores.sort()
// console.log(myHeores)
// const char='S'
// const num=new Number(char)
// console.log(num)
myArray.unshift(0) // To insert at the Very Start of the Array 
myArray.shift(0) // To remove the Element from the Start of the Array
// console.log(myArray.includes(5))
// console.log(myArray.indexOf(10))
const newArr=myArray.join() // Binds the whole Array But Also converts it into a String 
// console.log(newArr)
// console.log("ABCD",myArray)
// Splice() Cutts That whole part from the Array and stores Somwhere else as mentioned and also includes the last index as given in parameters Ex-(1,3) includes 1,2,3 
// slice() Just shows the specific part of the Array the original Array remains intact and it does not includes the last index given in parameters Ex-(1,3) includes 1,2
const marvel_heroes=["Thor","Ironman","Spiderman","Hulk","Captain America"]
const dc_heroes=["Superman","Flash","Batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
const newCombinedArray=marvel_heroes.concat(dc_heroes)
console.log(newCombinedArray)
const new_Array=[...marvel_heroes,...dc_heroes] // Spread Method That shatters all the elements and then merges them back into one Single Array Basically Concatinates all the Arrays
console.log(new_Array)