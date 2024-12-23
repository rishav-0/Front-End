const products=[
    
    {
        id:1,
        prodctImage:'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70',
        productName:'Apple AirPods Pro (2nd generation) with MagSafe Case',
        price:300,
    },
    {
        id:2,
        prodctImage:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAujrRTS4V78gTbkY8mDKOoVX5jhNT-pkA_XF5vjmRW2KTht7ObkQBRA2J3Kpf8elD2OtsDeM0mZQxF2C1heubKvxnOnaVV2Zm2OUF7CxSPxdNCoNfrzrb&usqp=CAE',
        productName:'I am Batman',
        price:375,
    },
    {
        id:3,
        prodctImage:'https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/y/d/q/beast-26t-with-front-suspension-and-disc-brake-and-complete-original-imah6mhe8w97zqse.jpeg?q=70',
        productName:'Leader beast 26T from suspenstion and disc Brake',
        price:375,
    },
    
]

const productCard = document.getElementById('productCard')
const ordersummary = document.getElementById('orderSummary')


productCard.innerHTML=products.map(i=>{
    return`
    <div class="border-b-2 border-slate-300 p-2 flex gap-2 flex-wrap sm:flex-nowrap  justify-between items-center" >
        <div class="flex gap-3  items-center" >
            <div class="w-[100px] overflow-hidden flex items-center justify-center">
                <img class="w-full"
                    src="${i.prodctImage}"
                    alt="">
            </div>
            <p class="line-clamp-2 font-semibold w-1/2">${i.productName}</p>
           
        </div>
        <div class="flex items-center gap-3">
            <p class="btn btn-dark whitespace-nowrap " onclick="addToCart(${i.id})">Add to Cart</p>
            <button class="btn btn-dark" onclick="removeItems(${i.id})"><i class="fas fa-trash-can"></i></button>
            <p class="font-semibold">$${i.price}</p>
        </div>
    </div>
    `
}).join('')

ordersummary.innerHTML = `
     <div class="">
        <div class="flex justify-between pb-4 border-b-2">
            <p class="">Subtotal</p>
            <p class="">Total Items: 0</p>
        </div>
        <div class="flex justify-between py-2 border-b-2">
            <p class="">Subtotal</p>
            <p class="">$0</p>
        </div>
        <div class="flex justify-between py-2 border-b-2">
            <p class="">V.A.T</p>
            <p class="">$0</p>
        </div>
    </div>
    <div class="border-t-2">
        <div class="flex justify-between py-2">
            <p class="">Total</p>
            <p class="">$0</p>
        </div>
        <button class="btn btn-warning w-full">Proceed to checkout</button>
    </div>
`

let cartItmes=[]

function viewcart(cart){
    const subtotal = cart.reduce((sum,acc)=>sum+acc.price,0)
    const vat = subtotal*(18/100)
    const total = subtotal + vat
    console.log(total)
    console.log(cart)
    
    ordersummary.innerHTML = `
    <div class="">
        <div class="flex justify-between pb-4 border-b-2">
            <p class="">Order Summary</p>
            <p class="">Total Items: ${cart.length}</p>
        </div>
        <div class="flex justify-between py-2 border-b-2">
            <p class="">Subtotal</p>
            <p class="">$${subtotal}</p>
        </div>
        <div class="flex justify-between py-2 border-b-2">
            <p class="">V.A.T</p>
            <p class="">$${vat}</p>
        </div>
    </div>
    <div class="border-t-2">
        <div class="flex justify-between py-2">
            <p class="">Total</p>
            <p class="">$${total}</p>
        </div>
        <button class="btn btn-warning w-full">Proceed to checkout</button>
    </div>
    `
}

function removeItems(id){
    const deletitem = cartItmes?.filter(i=>i.id !== id)
    viewcart(deletitem)
    console.log(cartItmes)
}

function addToCart(id){
    console.log(id)
    const filterCart = products.find(i=>i.id === id)
    cartItmes.push(filterCart)
    viewcart(cartItmes)
}



const additems=document.getElementById('additems')
function addelement(){
    const createp = document.createElement("p")
    createp.textContent="hello world"
    document.body.appendChild(createp)
    createp.className = "bg-warning text-red-500"
    additems.className = "btn btn-primary"
    createp.setAttribute('title',' new product')
}

