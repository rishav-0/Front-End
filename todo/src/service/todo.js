import axios from 'axios'
const API_URL = "https://todoappres-default-rtdb.firebaseio.com/todos.json"

export const listTodo = async () => {
    const response = await axios.get(API_URL)
    console.log(response,'jstodo')
    if (response.status === 200 && response.data) {
        const todoList = Object.entries(response.data).map(([id, todo]) => ({ id, ...todo, }));
        return todoList;
    }
    else {
        return response
    }
}

export const postTodoData = async (payload)=>{
    const response =  await axios.post(API_URL,payload)
    return response
}

export const deleteData = async (id)=>{
    const response  = await axios.delete(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`)
    return response
}

export const updateData = async (id,payload) =>{
    const response = await axios.patch(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`,payload)
    return response
}