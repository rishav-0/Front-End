import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('helo')
  const [title,setTitle] = useState('click me')
  const [productData,setProductData]  =useState([])
  const [isLoading,setLoading] = useState(false)

  const  productApi = ()=>{

    setLoading(true)

    fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => console.log(data))

    .catch(err=>{setTitle("failed to load");setLoading(false)})

  }

   useEffect(() => {
    productApi()
  }, []);

  console.log(productData)

  return (
    <>
    <button className='px-5 py-3 bg-green-400 rounded-sm ' onClick={()=>setCount(count+1)}>{count}</button>
    <button className='px-5 py-3 bg-green-400 rounded-sm ' onClick={()=>setName('Rishav')}>{name}</button>
    <button className='px-5 py-3 bg-green-400 rounded-sm ' onClick={()=>productApi()}>{title}</button>
    <h1 className='p-5 text-[80px]'>{isLoading?'loading':'data fetched'}</h1>
    {!isLoading && <h1 className='p-5 text-[80px]'>{title}</h1>}
    </>
  )
}

export default App
