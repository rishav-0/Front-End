import { createContext, useEffect, useState } from "react"
import { addToCart, cartItems, deleteItems, getAll, getBestSeller, getCategory, getFlashSale, updateCart } from "./Services"
import { useAuth } from "@clerk/clerk-react"

export const Globalcontext = createContext()

export const GlobalcontextProvider = ({ children }) => {

    const [flash, setFalsh] = useState([])
    const [best, setBest] = useState([])
    const [products, setProducts] = useState([])
    const [categories, setCategory] = useState([])
    const [flashLoading, setFlashLoading] = useState(false)
    const [flashError, setFlashError] = useState('')
    const [cart, setCart] = useState([])
     const { userId } = useAuth()

    const getProducts = async () => {
        const res = await getAll()
        setProducts(res?.data)
    }

    const getCategories = async () => {
        const res = await getCategory()
        // console.log(res,'category')
        setCategory(res?.data)
    }

    const getFlash = async () => {
        setFlashLoading(true)
        const res = await getFlashSale()
        console.log(res, 'res')
        if (res.status === 200) {

            const temp = res?.data && Object.entries(res?.data).map(([id, item]) => ({ id, ...item })) || []
            setFalsh(temp)
            setFlashLoading(false)
        } else {
            setFlashLoading(false)
            setFlashError(res)
        }
    }
    console.log(flashLoading, 'flash loading', flashLoading)

    const getBest = async () => {
        const res = await getBestSeller()
        const temp = res?.data && Object.entries(res?.data).map(([id, item]) => ({ id, ...item })) || []
        setBest(temp)
    }

    

    const getCart = async () => {
        const response = await cartItems()
        setCart(response)
    }

    const cartLIst = cart && Object.entries(cart).map(([_id, cartitme]) => ({ _id, ...cartitme, })) || []

    const deleteData = async (id)=>{
    const response  = await deleteItems(id)
    
    getCart()
    
    console.log(response,'deleted')
}

    const updateItem = async (id,payload)=>{
        const response  = await updateCart(id,payload)
        console.log(response,'hello')
       return response
    }

     
  const addtocart = async (i)=>{
    const payload = {
      _userId:userId,
      id:i.id,
      title: i.title,
      price: i.price,
      image: i.images[0],
      qty: 1
    }
    console.log('called 1')
    await addToCart(payload)

    getCart()
  }

      const handleAddUpdate = async (isinCart,i,sItem)=>{
        console.log('called ',isinCart,i,sItem);
    if(isinCart){
      const payload = {
        ...sItem,
        qty:sItem?.qty+1
      }
      const response = await updateItem(payload,sItem?._id)
      if(response.status == 200){
        toast.success('updated to cart')
        getCart()
      }
      else{
        toast.error('Failed to update')
      }
      console.log(response,'item')
    }
    else{
      addtocart(i)
    }
  }


    console.log(cartLIst,'cartlffdfist')

    useEffect(() => {
        getFlash()
        getBest()
        getProducts()
        getCategories()
        getCart()
    }, [])



    return <Globalcontext.Provider value={{ flash, best, products, categories, flashLoading, flashError,cart,setCart,cartLIst,deleteData,updateItem,getCart,handleAddUpdate }}>
        {children}
    </Globalcontext.Provider>
}