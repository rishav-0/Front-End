let sents="hello rishav talukdar"


function reverseStr(sent){
    let sentsplit=sent.split(" ")
    let string1=sentsplit[0].split("").reverse().join("")
    let string2=sentsplit[1].split("").reverse().join("")
    let string3=sentsplit[2].split("").reverse().join("")
    let sum = `${string1} ${string2} ${string3}`
    console.log(sum)
}

reverseStr(sents);
reverseStr("hola amigo mexico");

const  evenOdd = num=> num%2==0?"even":"odd"
  
let number = evenOdd(9)
console.log(number)

