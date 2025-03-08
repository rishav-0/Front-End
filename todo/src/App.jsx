import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input'
import Btn from './Components/Btn'
import Listing from './Components/Listing'
import { data } from 'autoprefixer'
import axios, { Axios } from 'axios'
import { deleteData, listTodo, postTodoData, updateData } from './service/todo'
import { Globalcontext } from './context/Globalcontext'
import Data from './Data'


function App() {

  const {name} = useContext(Globalcontext)

  const [list,setList] = useState('')
  const [todo,setTodo] = useState([])
  const [selectedTodo,setSelectedTodo] = useState({})
  const [loading,setLoading] = useState(false)

//   // const getTodo = ()=>{
//   //   fetch('https://todoappres-default-rtdb.firebaseio.com/todos.json')
//   //   .then(res=>res.json())
//   //   .then(data=>{
//   //     const todoList = Object.entries(data)?.map(([id,todo])=>({id,...todo}))
//   //     setTodo(todoList)
      
//   //   })
//   // }

// // const getTodo = async ()=>{
// //   const res = await fetch('https://todoappres-default-rtdb.firebaseio.com/todos.json')
// //   const data  =  await res.json()
// //   if(res.status == 200){
// //     const todoList = Object.entries(data)?.map(([id,todo])=>({id,...todo}))
// //      setTodo(todoList)
// //   }
// //   else{
// //     alert('failed to get')
// //   }
// // }

// //   useEffect(()=>{
// //     getTodo()
// //   },[])

// //   const postTodo = async()=>{
// //     setLoading(true)
// //     const payload  = JSON.stringify({
// //         text:list,
// //         completed:false,
// //         createdAt:Date.now()
// //       })
// //     const response = await fetch('https://todoappres-default-rtdb.firebaseio.com/todos.json',{
// //       method:'POST',
// //       body:payload
// //     })
// //     console.log(response,'response')
// //     if(response.status== 200){
// //       getTodo()
// //       setLoading(false)
// //     }
// //     else{
// //       alert('failed to create todo')
// //       setLoading(false)
// //     }
// //   }

// // const addTodo = ()=>{
// //     postTodo()
// //     setList('')
// //   }

// //   const deleteTodo = async(id)=>{
// //     const response  = await fetch(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`,{
// //       method:'DELETE',
// //     })
// //     console.log(response,'delete')
// //     if(response.status == 200){
// //       getTodo()
// //     }
// //     else{
// //       alert('failed to delete todo')
// //     }
// //   }

// //   const updateTodo = async(id)=>{
// //     const response = await fetch(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`,{
// //       method:'PATCH',
// //       body:JSON.stringify({
// //         text:list,
// //         completed:false,
// //         updatedAt:Date.now()
// //       })
// //     })
// //     console.log(response,'response')
// //     if(response.status== 200){
// //       getTodo()
// //       setSelectedTodo({})
// //     }
// //     else{
// //       alert('failed to update todo')
// //     }
// //   }

//   // const handleEdit = (data)=>{
//   //   console.log(data)
//   //   const item = data
//   //   setSelectedTodo(item)
//   //   setList(item.text)
//   // }

//   const API_URL = "https://todoappres-default-rtdb.firebaseio.com/todos.json"

  const getTodo = async ()=>{
    const response  = await listTodo()
    console.log(response,'error')
    setTodo(response);

  }


  useEffect(()=>{
    getTodo();
  },[])

  const postTodo = async ()=> {
    setLoading(true)
    const payload = {
      text:list,
      completed:false,
      createdAt:Date.now()
    }
    await postTodoData(payload)
    getTodo()
    setLoading(false)
    setList('')
  }  

   const deleteTodo = async (id)=>{
    await deleteData(id)
    getTodo()
    setSelectedTodo({})
    setList('')
   }

   const addTodo = ()=>{
    postTodo()
    setList('')
  }

   const updateTodo = async (id)=>{
      const payload = {
        text:list,
        completed:false,
        updatedAt: Date.now()
      }
      await updateData(id,payload)
      getTodo();
      setSelectedTodo({});
      setList("");
   }

   const handleEdit = (data) => {
    setSelectedTodo(data);
    setList(data.text);
  };


  return (
    <>
    <p className="">hello</p>
      <Btn title={name} cls='bg-black'>
        
      </Btn>
    <Data />

    <p className="text-xl mb-4 font-semibold">Todo</p>
    <div className="flex gap-3 items-center mb-4">
      <Input setList={setList} value={list} onChange={(e)=>setList(e.target.value)}/>
      {
        !selectedTodo?.text ? <Btn title={loading?'loading':'Add'} disabled={(list.length == 0 && list == '') || loading } cls='bg-black' onClick={addTodo}/> : <Btn title='Update' cls='bg-green-400' onClick={()=>updateTodo(selectedTodo?.id)}/>
      }
      
    </div>
      <div className="p-4">
       
        {
          todo.map(i=>{
            return (
              <Listing work={i.text} key={i.id} deleteTodo={()=>deleteTodo(i.id)} handleEdit={()=>handleEdit(i)} loading={loading}/>
            )
          })
        }
      </div>
    </>
  )
}

export default App
