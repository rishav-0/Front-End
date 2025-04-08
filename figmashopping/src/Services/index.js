import axios from "axios"

const flashSaleUrl = 'https://learn-18ff1-default-rtdb.firebaseio.com/flashsale.json'
const bestSellerUrl = 'https://learn-18ff1-default-rtdb.firebaseio.com/bestseller.json'
const ApiUrl = 'https://api.escuelajs.co/api/v1/products'
const allCategory = 'https://api.escuelajs.co/api/v1/categories' 
const cartUrl = 'https://learn-18ff1-default-rtdb.firebaseio.com/ExclusiveCart.json'

export const getAll = async ()=>{
    const res = await axios.get(ApiUrl)
    if(res.status == 200 && res.data){
        return res
    }
    else{
        return 'failed'
    }
}

export const getFlashSale = async ()=>{
    try{
        const res = await axios.get(flashSaleUrl)
        return res

    }catch{
        return 'error'
    }
    // if(res.status == 200 && res.data){
    // }
    // else{
    //     return res
    // }
}

export const getBestSeller = async ()=>{
    const res = await axios.get(bestSellerUrl)
    if(res.status == 200 && res.data){
        return res
    }
    else{
        return 'failed'
    }

}

export const getCategory = async ()=>{
    const res = await axios.get(allCategory)
    if(res.status == 200 && res.data){
        return res
    }
    else{
        return 'failed'
    }
}

export const cartItems = async ()=>{
     try{
        const res = await axios.get(cartUrl)
        return res.data

    }catch{
        return 'error'
    }
}

export const addToCart = async (payload)=>{
    try{
        const res = await axios.post(cartUrl,payload)
        console.log('called added to cart')
    }catch(error){
        console.log('called failed to add')
    }
}
export const updateCart = async (id,payload)=>{
    try{
        const res = await axios.patch(`https://learn-18ff1-default-rtdb.firebaseio.com/ExclusiveCart/${id}.json`,payload)
        return res
        console.log('update cart')
    }catch(error){
        console.log('failed to update')
    }
}



export const deleteItems = async (id)=>{
    const res  = await axios.delete(`https://learn-18ff1-default-rtdb.firebaseio.com/ExclusiveCart/${id}.json`)

    // const cart = Object.entries(response.data).map(([id, todo]) => ({ id, ...todo, }));
    console.log(res.data)
    return res.data
}