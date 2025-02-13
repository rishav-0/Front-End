// "use strict"
console.log(this)

function sum(a,b){
    console.log(a+b)
    console.log(this,'insights function')
}

sum(4,9)

const user = {
    name:'rishav',
    age:22,
    sum:function (a,b){
        console.log(a+b)
        console.log('inside object',this)

        function subtract(a,b){
            console.log(a-b)
            console.log('inside subrtract',this)
        }
        subtract(10,6)
    }
}

user.sum(3,4)