let Tasks = []

const todo = document.getElementById('todo')
const task = document.getElementById('task')

todo.addEventListener('submit',function(event){
    event.preventDefault()
    console.log('djfa')
    addTodo()
})

function addTodo(){
    Tasks.push({
        id:Date.now(),
        item:task.value
    })
    task.value=''
    console.log(Tasks)
    renderList()
}


function renderList(){
    
    document.getElementById('list').innerHTML = Tasks.map(i=>{
        return `
            <li class="flex justify-between items-center">
                <div class="flex gap-2 items-center">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='14' viewBox='0 0 50 50'%3E%3Cpath d='M46.4 16.2c-2.3-2.3-5.4-3.5-8.4-4.5-.5-.2-1.1-.3-1.6-.5-1.6-1.6-3.7-2.8-6.2-3.2-1-.2-1.9.1-2.5.6-.9-.3-1.8-.6-2.7-.8-3.2-1-6.4-1.8-9.5-.1-1 .5-1.9 1.2-2.7 2-6.4 1.4-11.7 5-12.4 12.7C0 27 1.9 31.5 4.9 34.9c.1.6.2 1.1.4 1.7 1 3.2 3.3 5.7 6.7 6.5 2.7.6 5.4-.2 7.9-1.2 3.3.4 6.7.3 9.9 0 6.5-.7 13.3-2.8 17.1-8.5 3.6-5.2 4-12.6-.5-17.2zm-17.3.9c2.1.4 4 1.7 4.7 3.8 0 .5-.1 1.1-.2 1.6-.3 1.4-.8 2.6-1.6 3.7-.7.2-1.5.1-2.3-.4-.8-.4-1.6-1-2.2-1.6-.4-.4-1.2-1.7-1.6-1.9 3.4 1.3 5.1-3 3.2-5.2zm-11.6 9.7c.2-1.9 1.1-3.9 2.3-5.5-.4 2.1.3 4.2 1.7 6 1.3 1.7 3.1 3.2 5 4.2-.2.1-.4.2-.6.4-.1 0-.1.1-.2.1-3.9.2-8.7-.8-8.2-5.2zm-6.4 3.1c.1.3.1.7.2 1 .2.6.4 1.2.7 1.8-.4-.2-.7-.5-1-.7.1-.8.1-1.4.1-2.1zm31.2-1.3c-.9 1.7-2.1 3.1-3.7 4.1 2-2.1 3.4-4.7 4-7.6.2-.7.3-1.4.3-2.1.6 1.5.5 3.3-.6 5.6z'/%3E%3C/svg%3E" alt="">
                    <p>${i.item}</p>
                </div>
                 <div class="flex gap-3 items-center p-1"> <i onclick="editItem(${i.id})" class="fas fa-pen text-blue-500 cursor-pointer"></i> <i onclick="reomveTask(${i.id})" class="fas fa-trash-can cursor-pointer text-red-500"></i> </div> 
            </li>
        `
    }).join('')
  
}

function reomveTask(id){
    Tasks = Tasks.filter(i=>i.id !== id)
    console.log('item deleted')
    renderList()
}

let selectedTask = ''

function editItem(id){
    const selectedItem = Tasks.find(i=>i.id === id)
    task.value=selectedItem.item
    selectedTask = selectedItem
    document.getElementById('addbtn').style.display='none'
    document.getElementById('updatebtn').style.display='block'
    renderList()
}

function updateTask(){
    reomveTask(selectedTask.id)
    Tasks.push({
        id:selectedTask.id,
        item:task.value
    })
    document.getElementById('addbtn').style.display='block'
    document.getElementById('updatebtn').style.display='none'
    selectedTask = ''
    task.value=''
    console.log(Tasks)
    renderList()
    console.log(selectedTask)
}
