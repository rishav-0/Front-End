const details = document.getElementById('details')
const category = document.getElementById('category')
const orderSummary = document.getElementById('orderSummary')
const cartList = document.getElementById('cartList')

let productList = []
fetch('https://dummyjson.com/products/?limit=19')
      .then(response => response.json())
      .then(data => {
            productList = data.products.map(i=>({...i,quantity:0}))
            console.log(productList)
            const filterdata2  = productList.map(i=>i.category)
            console.log(filterdata2)
            let filterdata = new Set(filterdata2)
            console.log(filterdata)
            category.innerHTML= [...filterdata]?.map(i=>{

                return `
                <button onclick="filterCategory('${i}')">${i}</button>
                `
            }).join('')

            details.innerHTML = productList?.map(i =>{
                console.log(i.quantity)
                return `
                <div class="w-[180px] p-2 rounded-lg border-2">
            <div class="overflow-hidden rounded-lg h-[100px] w-full flex items-center justify-center bg-slate-200 relative">
                <img class="h-[90px] object-contain " src="${i?.thumbnail}" alt="">
            </div>
            <p class="font-semibold line-clamp-1">${i?.title}</p>
            <div class="">
                <i class="fas fa-star text-yellow-400"></i>
                ${i?.rating}
                <span class="text-slate-400">(${i?.reviews?.length} Reviews)</span>
                <div class="flex justify-between items-center">
                    <p class="text-lg font-semibold">$${i?.price}</p>
                    ${i.quantity > 0?`<div onclick="decrement(${i.id})" class="cursor-pointer rounded-full h-[24px] w-[24px] bg-white flex items-center justify-center text-slate-300"><i class="fas fa-minus"></i></div>
                    <p class="text-sm" id="productid_${i.id}">${i.quantity}</p>
                    <div onclick="addToCart(${i.id})" class="cursor-pointer rounded-full h-[24px] w-[24px] bg-white flex items-center justify-center text-slate-300"><i class="fas fa-plus"></i></div>`
                    :`<button onclick="addToCart(${i.id})" class="btn btn-outline-dark text-xs p-1">Add to cart</button>`
                }
                    
                    
                </div>
            </div>
        </div>
                `
            }).join('')

            
      })

      function filterCategory(){
        console.log('category')
      }

const cartItems=[]

function addToCart(id){
    const product = productList?.find(i=> i.id === id)
    const existingItem = cartItems.find(item => item.id === id)
    if (existingItem) {
        
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
   
    summary()
}

function removeItem(){

}

function summary(){
    const totalitems = cartItems.length
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
    document.getElementById('totalItem').textContent = totalitems
    document.getElementById('totalPrice').textContent = totalPrice

    cartList.innerHTML = cartItems.map(i=>{
        
        return `
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img class="h-20" src="${i.thumbnail}"   alt="">
                    <p class="text-sm">${i?.title} </p>
                </div>
                <p class="text-sm">${i.quantity} x ${i.price} </p>
                <p class="text-sm">${(i.price*i.quantity).toFixed(2)} </p>
            </div>
        `
    }).join('')
    
}