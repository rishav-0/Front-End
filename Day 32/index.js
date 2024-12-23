let user = [{
    id:1,
    username:'Tom Cruise',
    age:60,
},
{
    id:2,
    username:'Dwyane Johnson',
    age:55,   
}
]

// let  output= document.getElementById('output')
// let html=""
// for(let i=0; i<user.length; i++){
//     html+=`
//     <div class="my-3 p-3">
//         <p>User name is ${user[i]?.username}</p>
//         <p>User age is ${user[i]?.age}</p>
//         <p>User id is ${user[i]?.id}</p> 
//     </div>
//    `
// }
// output.innerHTML=html

// let whiledata= document.getElementById('whiledata')

// let count= 0
// let htmldata=""
// while(count<user.length){
//     htmldata+=`
//     <div class="my-3 p-3">
//         <p>User name is ${user[count]?.username}</p>
//         <p>User age is ${user[count]?.age}</p>
//         <p>User id is ${user[count]?.id}</p> 
//     </div>
//     `
//     count++
// }

// whiledata.innerHTML=htmldata
let users = [{
    id:1,
    username:'Tom Cruise',
    age:60,
},
{
    id:2,
    username:'Dwyane Johnson',
    age:55,   
}
]


// let forin=document.getElementById('forin')

// let htmlforin=""

// for(let index in users){
//     htmlforin+=`
//     <div class="my-3 p-3">
//          <p>User name is ${users[index]?.username}</p>
//          <p>User age is ${users[index]?.age}</p>
//          <p>User id is ${users[index]?.id}</p> 
//   </div>
//     `
// }

// forin.innerHTML=htmlforin


let forof=document.getElementById('forof')

let htmlforof=""

for(let index of users){
    htmlforof+=`
        <div class="my-3 p-3">
          <p>User name is ${users[index]?.username}</p>
          <p>User age is ${users[index]?.age}</p>
          <p>User id is ${users[index]?.id}</p> 
   </div>
    `
}

forof.innerHTML=htmlforof