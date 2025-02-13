import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Radio from './Components/Radio'
import Input from './Components/Input'

function App() {
   const [work,setWork] = useState('')
   const [fname,setFname] = useState('')
   const [lname,setLname] = useState('')
   const [email,setEmail] = useState('')
   const [phone,setPhone] = useState()
   const [address,setAddress] = useState('')
   const [contract,setContract] = useState('')
   const [date,setDate] = useState('')
   const [tax,setTax] = useState('')
   const [level,setLevel] = useState('')

  
   console.log({work,fname,lname,email,phone,address,contract,date,tax,level})

  return (
    <>
     <p className="text-lg font-semibold mb-3">General Info</p>
     <hr />
     <p className="text-sm my-3">Worker Type</p>
     <div className="flex gap-3 mb-3">
        <Radio name='work' title='Fixed Rate' icon='fas fa-money-check' onChange={(e)=>setWork(e.target.value)} />
        <Radio name='work' title='Pas as you go' icon='fas fa-hourglass' onChange={(e)=>setWork(e.target.value)}/>
        <Radio name='work' title='Milestone' icon='fas fa-money-bill' onChange={(e)=>setWork(e.target.value)}/>
     </div>
     <p className="text-sm my-3">Personal Information</p>
     <div className="grid grid-cols-2 gap-3 mb-3">
        <Input name='firstname'  label='First Name' onChange={(e)=>setFname(e.target.value)} type='text'/>
        <Input name='lastname' label='Last Name'  onChange={(e)=>setLname(e.target.value)}  type='text'/>
        <Input name='email' label='Email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <Input name='phone' label='Phone Number' onChange={(e)=>setPhone(e.target.value)} type='tel'/>
     </div>
        <Input name='address' label='Address' onChange={(e)=>setAddress(e.target.value)}  type='text'/>
      <p className="text-sm my-3">Contract Detail</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Input name='contract' label='Contract Name' onChange={(e)=>setContract(e.target.value)} type='text' className='mb-3'/>
          <Input name='date' label='Start Date' onChange={(e)=>setDate(e.target.value)} type='date' className='text-slate-400 focus-visible:text-black'/>
          <div className="">
            <p className="text-slate-500 text-sm">Tax Residence</p>
            <select name='tax' id="" onChange={(e)=>setTax(e.target.value)}  className='focus-visible:outline-none border rounded-sm w-full p-1'>
              <option >Select</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
          </div>
          <div className="">
            <p className="text-slate-500 text-sm">Seniority Level</p>
            <select name="level" id="" onChange={(e)=>setLevel(e.target.value)} className='focus-visible:outline-none border rounded-sm w-full p-1'>
              <option >Select</option>
              <option value="UI/UX Staff">UI/UX Staff</option>
              <option value="React Js">React Js</option>
            </select>
          </div>

        </div>
        <label htmlFor="scope">
          <input type="checkbox" name="scope"  />
          <span className="text-slate-500 text-sm ml-2">Scope of Work</span>
        </label>

      <p className="p-2 text-xs border w-full">
        <b>Project Overview</b>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae reiciendis nemo rerum officiis soluta quia minima aspernatur, provident rem at nobis, explicabo laboriosam ea, sunt possimus numquam. Sequi amet fugit quis explicabo sint harum eveniet quibusdam magnam numquam sapiente.</p>

    </>
  )
}

export default App
