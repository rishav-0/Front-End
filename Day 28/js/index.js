let age = 18
let b = 18

let c = age>b?true:false
console.log(c)

if(age>b){
    console.log("you are eligible for vote")
}
else if(age===b){
    console.log("create your voter id")
}
else{
    console.log("not eligible  for vote")
}

let day= ""

switch(day){
    case "monday":
        console.log("Chest and shoulder");
        break;
    case "tuesday":
        console.log("Back and biceps");
        break;
    case "wednesday":
        console.log("legs and shoulder");
        break;
    default:
        console.log("rest day")
}