let todoInput=document.getElementById('todoInput')

let arr=[]

var para = document.getElementById('para')

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
        </div>
    `
}).join('')
}
console.log(arr)

function deletTodo(id){
    arr=arr.filter(i=>i.id !== id)
    // arr.splice(id,1)

    rendertodolist()
}
