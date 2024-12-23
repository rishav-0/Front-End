


const products = [
    {
        id: 1,
        brand: 'nike',
        brandLogo: 'https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3eba6993-1ecb-477e-90c6-d0bd8385d9e7/JPN+M+NK+LW+WVN+WR+JKT+OLYB.png',
        productName: 'NIke Dri-fit training summer special kit',
        size: 'XL',
        color: 'Black',
        Price: 40,
        quantity: 0,
        totalprice: 0,
    },
    {
        id: 2,
        brand: 'nike',
        brandLogo: 'https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3eba6993-1ecb-477e-90c6-d0bd8385d9e7/JPN+M+NK+LW+WVN+WR+JKT+OLYB.png',
        productName: 'NIke Dri-fit training summer special kit',
        size: 'XL',
        color: 'Black',
        Price: 60,
        quantity: 0,
        totalprice: 0,
    },
    {
        id: 3,
        brand: 'nike',
        brandLogo: 'https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3eba6993-1ecb-477e-90c6-d0bd8385d9e7/JPN+M+NK+LW+WVN+WR+JKT+OLYB.png',
        productName: 'NIke Dri-fit training summer special kit',
        size: 'XL',
        color: 'white',
        Price: 90,
        quantity: 0,
        totalprice: 0,
    }
]

const productList = document.getElementById('productList')
const totalvat = document.getElementById('totalvat')
const subtotal = document.getElementById('subtotal')
const total = document.getElementById('total')

function rendercomponent() {
    productList.innerHTML = products.map(i => {
        return `
        <div class="flex justify-between border-b-[2px] pb-3.5 mb-2">
            <div class="flex items-center gap-2">
                <div class="h-[100px] w-[80px] flex items-baseline justify-center overflow-hidden object-contain rounded-sm">
                    <img class="w-full" src="${i.image}" alt="">
                </div>
                <div class="flex flex-col justify-between gap-1">
                    <p class="text-sm flex gap-2 items-center"> 
                        <img class="h-4" src="${i.brandLogo}" alt="">    
                        Nike
                    </p>
                    <p class="text-sm">${i.productName}</p>
                    <p class="text-sm text-slate-400">${i.size} . ${i.color}</p>
                    <p class="text-sm">SAR ${i.Price} <span class="text-slate-400">per item</span></p>
                </div>
            </div>
            <div class="flex justify-between flex-col">
                <div class="flex items-center gap-3 p-1">
                    ${i.quantity > 0 ? 
                    `<div onclick="decrement(${i.id})" class="cursor-pointer rounded-full h-[24px] w-[24px] bg-white flex items-center justify-center text-slate-300"><i class="fas fa-minus"></i></div>
                    <p class="text-sm" id="productid_${i.id}">${i.quantity}</p>
                    <div onclick="addToCart(${i.id})" class="cursor-pointer rounded-full h-[24px] w-[24px] bg-white flex items-center justify-center text-slate-300"><i class="fas fa-plus"></i></div>` 
                    : 
                    `<p id="productid_${i.id}" onclick="addToCart(${i.id})" class="text-sm text-slate-400">Add to cart</p>`}
                </div>
                
                <p class="font-semibold" id="totalPrice_${i.id}">SAR ${i.totalprice}</p>
            </div>
        </div>
        `
    }).join('')
}

rendercomponent()

function addToCart(id) {
    const product = products.find(i => i.id === id)
    if (product) {
        product.quantity++
        updateQuantity(product)
    }
}

function decrement(id) {
    const product = products.find(i => i.id === id)
    if (product) {
        if (product.quantity > 0) {
            product.quantity--
            updateQuantity(product)
        }
    }
}

function updateQuantity(product) {
    document.getElementById(`productid_${product.id}`).textContent = product.quantity
    document.getElementById(`totalPrice_${product.id}`).textContent = `SAR ${product.quantity * product.Price}`
    updateTotal(product)
    totalAmount()
}

function updateTotal(product) {
    product.totalprice = product.quantity * product.Price
    console.log(products)
}

function totalAmount() {
    const filterdata = products.filter(i => i.quantity !== 0)
    const subtotalAmount = filterdata.reduce((sum, acc) => sum + acc.totalprice, 0)
    totalvat.textContent = `SAR ${subtotalAmount}`
    console.log(subtotalAmount)
}

