const task = document.getElementById('task')

// let todo = []

// function addTask(){
//     console.log(task.value)
//     if(task.value != '' ){
//         todo.push({
//         id:Date.now(),
//         taskName: task.value
//     })
//     }
    
//     console.log(todo)
//     task.value= ''
//     showTask()
// }

// function showTask(){
//     document.getElementById('showTask').innerHTML = todo.map(i=>{
//         return `
//             <div class="flex items-center gap-3 mb-2">
//                 <p class="h3">${i.taskName}</p>
//                 <button class="btn btn-danger" onclick="remove(${i.id})">Delete</button>
//                 <button class="btn btn-primary" id='edit' onclick='inputUpdate(${i.id})'>Edit</button>
//             </div>
//         `
//     }).join('')
// }

// function remove(id){
//     todo = todo.filter(i=>i.id != id)
//     showTask()
// }

// let selectedItem ;

// function inputUpdate(id){
//     let toEdit = todo.find(i=>i.id === id)
//     task.value = toEdit.taskName
//     selectedItem = toEdit

//     document.getElementById('update').classList.remove('hidden')    

//     showTask()
// }

// function update(){
//     console.log(selectedItem)
//     // remove(selectedItem.id)
//     // todo.push({
//     //     id:selectedItem.id,
//     //     taskName: task.value
//     // })

//     todo = todo.map(i => 
//         i.id === selectedItem.id ? { ...i, taskName: task.value } : i
//     );
//     task.value = ''

//     showTask()
// }

// const todo = []



// const getTodo = async ()=>{
//     const res = await fetch(`https://todoappres-default-rtdb.firebaseio.com/todos.json`)
//     const data  = res.json()
//     if(res.status == 200){
//         const todoList = Object.entries(data)?.map(([id,todo])=>({id,...todo}))
//         todo.push(todoList)
//     }
//     else{
//         alert('failed to get')
//     }
// }

// getTodo()

// const addTodo = async ()=>{
//     const payload  = JSON.stringify({
//         text:task.vlue,
//         completed:false,
//         createdAt:Date.now()
//       })
//     const response = await fetch('https://todoappres-default-rtdb.firebaseio.com/todos.json',{
//       method:'POST',
//       body:payload
//     })
//     console.log(response,'response')
//     if(response.status== 200){
//       getTodo()
//     }
//     else{
//       alert('failed to create todo')
//     }
// }

// console.log(todo)

const apiUrl = "https://todoappres-default-rtdb.firebaseio.com/todos.json";

// Function to get todos
const getTodo = async () => {
    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        const data = await res.json();
        
        if (data) {
            const todoList = Object.entries(data).map(([id, todo]) => ({
                id,
                ...todo
            }));
            console.log("Todos:", todoList);
            displayTodos(todoList);
        }
    } catch (error) {
        console.error(error);
        alert("Failed to fetch todos");
    }
};

// Function to add a new todo
const postTodo = async (taskName) => {
    try {
        const payload = {
            text: task.value,
            completed: false,
            createdAt: Date.now(),
        };

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error("Failed to add todo");
        }

        alert("Todo added successfully!");
        getTodo(); // Refresh the list after adding
    } catch (error) {
        console.error(error);
        alert("Failed to add todo");
    }
};

// Function to delete a todo
const deleteTodo = async (id) => {
    try {
        const res = await fetch(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error("Failed to delete todo");
        }

        alert("Todo deleted successfully!");
        getTodo(); // Refresh the list after deletion
    } catch (error) {
        console.error(error);
        alert("Failed to delete todo");
    }
};

// Function to update a todo
const updateTodo = async (id, newText) => {
    try {
        const payload = {
            text: newText,
            updatedAt: Date.now(),
        };

        const res = await fetch(`https://todoappres-default-rtdb.firebaseio.com/todos/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error("Failed to update todo");
        }

        alert("Todo updated successfully!");
        getTodo(); // Refresh the list after update
    } catch (error) {
        console.error(error);
        alert("Failed to update todo");
    }
};

// Function to display todos in the UI
const displayTodos = (todos) => {
    const showTask = document.getElementById("showTask");
    showTask.innerHTML = todos
        .map(
            (todo) => `
        <div class="flex items-center gap-3 mb-2">
            <p class="h3">${todo.text}</p>
            <button class="btn btn-danger" onclick="deleteTodo('${todo.id}')">Delete</button>
            <button class="btn btn-primary" onclick="editTodo('${todo.id}', '${todo.text}')">Edit</button>
        </div>
    `
        )
        .join("");
};

// Function to handle edit
const editTodo = (id, text) => {
    document.getElementById("task").value = text;
    document.getElementById("update").onclick = () => updateTodo(id, document.getElementById("task").value);
    document.getElementById("update").classList.remove("hidden");
};

// Initial fetch
getTodo();
