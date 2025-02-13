import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Components/Forms'
import SectionRight from './Components/SectionRight'
import { Route, Routes } from 'react-router'
import Info from './Components/Info'


function App() {

   const [userData,setUserdata] = useState(null)
   const [register,setRegister] = useState([])
   const [actionType, setType] = useState('create')
  

   const handleDelete = (id)=>{
      const deleteData = register.filter(i=>i.id != id)
      setRegister(deleteData)
   }

   const handleEdit = (i)=>{
    setUserdata(i)
    console.log(i,'edit')
    handleDelete(i.id)  
    setType('edit')  
   }


   

console.log(register,userData)
   

  return (
    <>
      <div className=" grid md:grid-cols-2">
        <Forms register={register} setRegister={setRegister} actionType={actionType} userData={userData}  setUserdata={setUserdata}/>
       {register.length === 0 ?<SectionRight />:<>
        {
          register.map(i=><Info info={i}  handleEdit={()=>handleEdit(i)} saveEdit={()=>saveEdit(i)} handleDelete={()=>handleDelete(i.id)}/>)
        }
       </>}
      </div>
    </>
  )
}

export default App
