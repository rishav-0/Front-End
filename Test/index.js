// // String methods  

// const { data } = require("react-router")

// let a ='    Hello    how are you    '
// console.log(a.slice(6,9))
// console.log(a.includes('you'))
// console.log(a.trim())
// console.log(a.trimStart())
// console.log(a.trimEnd())
// console.log(a.trimEnd())
// console.log(a.indexOf('you'))
// console.log(a.search('how'))
// console.log(a.replaceAll('o','k'))


// // Array methods

// let arr = ['how','you','doing','?']

// console.log(arr.push('hi'))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.find(i=>i==='?'))
// console.log(arr.filter(i=>i !=='?'))
// console.log(arr.shift())
// console.log(arr.unshift('Hi'))
// console.log(arr.concat('ok'))
// console.log(arr.length)
// console.log(...['ok','bye'],...arr)


// // number methods

// let b = 123.55

// console.log(b.toFixed('1'))
// console.log(typeof b)
// console.log(typeof b.toString())
// console.log(4**2)
// console.log(Math.ceil(b))
// console.log(isNaN(b))
// console.log(typeof parseInt('123'))
// console.log( parseFloat('123.90'))
// console.log(Math.sqrt(16))
// console.log(Math.pow(4,2))


// const students = [
//     {
//         sName:'Rishav Talukdar',
//         rollNo:3,
//         class:7,
//         address:{
//             vill:'Rauly',
//             pin:781311,
//             dist:'Barpeta'
//         }
//     },
//     {
//         sName:'Ankur Kalita',
//         rollNo:16,
//         class:7,
//         address:{
//             vill:'Sarthebari',
//             pin:781307,
//             dist:'Barpeta'
//         }
//     },
// ]

// students.map(i=>console.log(i))
let cart = []

let products = []

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>{
                products = data?.map(i=>({...i,quantity:0}))
                renderProducts()
            })


function renderProducts() {
    document.getElementById('listing').innerHTML = products.map(i => {
        const inCart = cart.find(cartItem => cartItem.id === i.id);
        return `
            <div class="p-2 rounded-lg bg-slate-200 flex flex-col justify-between">
                <img class="rounded-lg mb-3" src="${i.image}" alt="">
                <div class="flex justify-between items-center">
                    <p class="font-semibold">$ ${i.price}</p>
                    ${
                        inCart && inCart.quantity > 0 
                            ? `<button class="btn btn-dark text-xs" onclick="decrement(${i.id})">Remove</button>` 
                            : `<button class="btn btn-dark text-xs" onclick="increment(${i.id})">Add to cart</button>`
                    }
                </div>
            </div>
        `;
    }).join('')
}

function increment(id){
    const item = products?.find(i=>i.id === id)
    const ifExist = cart?.find(i=>i.id === id)

    if(ifExist){
        ifExist.quantity++
    }
    else{
        cart.push({...item,quantity:1})
    }
    renderCart()
    renderProducts()
}

function decrement(id) {
    const item = cart.find(i => i.id === id);

    if (item) {
        item.quantity--
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id)
        }
    }

    renderCart()
    renderProducts()
}

// function renderCart(){
//        let cartlist = cart.map(i=>({...i,totalPrice:i.price * i.quantity}))
//         console.log(cartlist)

//     document.getElementById('cart').innerHTML = cartlist.map(i=>{
        
//         return `
//            <div class="flex justify-between items-center mb-3">
//                     <div class="h-[100px] w-[80px] overflow-hidden flex items-center justify-center p-2">
//                         <img class="w-full" src="${i.image}" alt="">
//                     </div>
//                     <div class="flex items-center gap-3 bg-white p-2 py-1 rounded-full">
//                         <i class="fas fa-minus cursor-pointer hover:text-gray-300" onclick="decrement(${i.id})"></i>
//                         <p class="">${i.quantity}</p>
//                         <i class="fas fa-plus cursor-pointer hover:text-gray-300" onclick="increment(${i.id})"></i>
//                     </div>
//                     <p class="text-lg font-semibold">$${i.totalPrice}</p>
//                 </div>
//         `
//     }).join('')

// }

function renderCart() {
    let total = 0;

    const cartList = cart.map(i => {
        const totalPrice = (i.price * i.quantity).toFixed(2);
        total += parseFloat(totalPrice);
        return `
            <div class="flex justify-between items-center mb-3">
                <div class="h-[100px] w-[80px] overflow-hidden flex items-center justify-center p-2">
                    <img class="w-full" src="${i.image}" alt="">
                </div>
                <div class="flex items-center gap-3 bg-white p-2 py-1 rounded-full">
                    <i class="fas fa-minus cursor-pointer hover:text-gray-300" onclick="decrement(${i.id})"></i>
                    <p>${i.quantity}</p>
                    <i class="fas fa-plus cursor-pointer hover:text-gray-300" onclick="increment(${i.id})"></i>
                </div>
                <p class="text-lg font-semibold">$${totalPrice}</p>
            </div>
        `;
    }).join('');

    document.getElementById('cart').innerHTML = cartList;

    document.getElementById('total').innerHTML = `
        <p class="font-bold text-xl">Total: $${total.toFixed(2)}</p>
        <button class="btn btn-dark mt-3" >Checkout</button>
    `;

    document.getElementById('totalitems').innerText = cart.length
}




//total price
//cart button update plus minus
//filter

//react routing
// custom button