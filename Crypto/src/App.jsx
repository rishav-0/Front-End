import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

const coinBaseURL = 'https://api.coinbase.com/v2/prices/spot?currency=USD'
// const coinDesk ='https://api.coindesk.com/v1/bpi/currentprice.json'
// const coinCap = 'https://api.coincap.io/v2/assets'

const [coinbase,setcoinbase] = useState()

const getCoinBase= async ()=>{
    const res = await axios.get(coinBaseURL)
    const data  = res.data
    setcoinbase(data.data)
}

useEffect(()=>{
    getCoinBase()
},[])

console.log(coinbase,'coin');

  return (
    <>
    
      <div className="flex gap-4">
        <div className="">
          <p className="font-semibold">Coinbase</p>
          <p className="">{coinbase.amount}</p>
        </div>
      </div>
   

    </>
  )
}

export default App
