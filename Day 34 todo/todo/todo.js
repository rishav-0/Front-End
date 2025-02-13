let todoInput=document.getElementById('todoInput')

let arr=[]

var para = document.getElementById('para')

let inputValue = todoInput.value
function addTodo(){
    let inputValue = todoInput.value
    arr.push({
        id:Date.now(),
        todo:inputValue,
    })
    todoInput.value=''

    rendertodolist()

}

function rendertodolist(){
    para.innerHTML=arr.map((i,index)=>{
    return`
        <div class="flex gap-3 items-center mb-3">
           ${index+1} ${i.todo} <i class="fas fa-trash-can text-xs text-danger cursor-pointer" onclick="deletTodo(${i.id})"></i>
            <i class="fas fa-pen text-xs text-primary cursor-pointer" onclick="editTodo(${i.id})"></i>
        </div>
    `
}).join('')
console.log(arr)

}
console.log(arr)

function deletTodo(id){
    arr=arr.filter(i=>i.id !== id)
    // arr.splice(id,1)

    rendertodolist()
}

let currentEditId

function editTodo(id){
    const todoItem = arr.find(i=>i.id === id)
    console.log(todoItem)
    if(todoItem){
        todoInput.value = todoItem.todo
        currentEditId = id
    
    }
}

function saveTodo(){
    deletTodo(currentEditId)
    let inputValue = todoInput.value
    arr.push({
        id:currentEditId,
        todo:inputValue,
    })
    todoInput.value=''

    

    rendertodolist()
}


const user ={
    name:'rishav',
    age:22,
    weight:65
}

// const {name,age,weight}=user2