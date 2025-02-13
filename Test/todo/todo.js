const task = document.getElementById('task')

let todo = []

function addTask(){
    console.log(task.value)
    if(task.value != '' ){
        todo.push({
        id:Date.now(),
        taskName: task.value
    })
    }
    
    console.log(todo)
    task.value= ''
    showTask()
}

function showTask(){
    document.getElementById('showTask').innerHTML = todo.map(i=>{
        return `
            <div class="flex items-center gap-3 mb-2">
                <p class="h3">${i.taskName}</p>
                <button class="btn btn-danger" onclick="remove(${i.id})">Delete</button>
                <button class="btn btn-primary" id='edit' onclick='inputUpdate(${i.id})'>Edit</button>
            </div>
        `
    }).join('')
}

function remove(id){
    todo = todo.filter(i=>i.id != id)
    showTask()
}

let selectedItem ;

function inputUpdate(id){
    let toEdit = todo.find(i=>i.id === id)
    task.value = toEdit.taskName
    selectedItem = toEdit

    document.getElementById('update').classList.remove('hidden')    

    showTask()
}

function update(){
    console.log(selectedItem)
    // remove(selectedItem.id)
    // todo.push({
    //     id:selectedItem.id,
    //     taskName: task.value
    // })

    todo = todo.map(i => 
        i.id === selectedItem.id ? { ...i, taskName: task.value } : i
    );
    task.value = ''

    showTask()
}