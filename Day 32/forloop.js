//1. for loop
let arr=[1,2,3,4,5]
for(let i=0; i<3; i++){
    console.log(arr[i])
}
//2. while loop
let count=0
while(count<5){
    console.log(count)
    count++;
}
//3. do while  loop
let num=0
do{
    console.log(num)
    num++
}while(num<3)
//4. for in loop
const user={
    Fullname:'Ronaldo',
    age:32,
}
for(let key in user){
    console.log(key,user[key])
}
//5. for of loop
let a=[1,2,4,5,6]
for(let value of a){
    console.log(value)
}
//6. for each loop
const use=[{
    Fullname:'Ronaldo',
    age:32,
},
{
    Fullname:'Messi',
    age:30,
}]
// let data = use.forEach(function (item){
//     item.Fullname='Messi'
//     console.log(item.Fullname)
// })
// use.forEach(item =>{
//     console.log(item.Fullname)
// })
// console.log(use)

// const value = a.map(i=>console.log(i))
// console.log(value)

// const star="*"
// for(let i =0; i<=5; i++){
//     console.log(star.repeat(i))
// }
for(let i =0; i<=use.length-1; i++){
    console.log(i)
    console.log(use[i])
}
