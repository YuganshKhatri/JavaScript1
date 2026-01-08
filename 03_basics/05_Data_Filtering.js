const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// const userBooks=books.filter((book) => book.genre==='Non-Fiction')
// console.log(userBooks)
// const userBooks=books.filter((book) => book.publish>2000)
// console.log(userBooks)
const userBooks=books.filter((book) => {
    return book.publish>=1995 && book.genre==='History'
})
// console.log(userBooks)
//                                       CHAINING
const numarray=[1,2,3,4,5,6,7,8,9,10]
const userdata=numarray.map((num)=> num*10).map((num)=>num+1)
// console.log(userdata)

// reduce() gives us an accumulator
const myNums=[1,2,3,4]
let initialValue=5
const mytotal=myNums.reduce((acc,currval)=> acc+currval,initialValue)
// console.log(mytotal)
const courses=[
    {price:1000},
    {price:2000},
    {price:3000}
]
const totalprice=courses.reduce((acc,item)=> acc+item.price,0)
console.log(totalprice)

