function changeColor(){
    document.body.style.background='#000000'
    document.body.style.color='#ffffff'
}

function reverseColor(){
    document.body.style.background='#ffffff'
    document.body.style.color='#000000'
}

const key = document.getElementById('key')

document.addEventListener('keydown',(event)=>{
    const keyName = event.key
    const keyCOde = event.code
    key.textContent = `${keyName} ${keyCOde}`
    console.log(event)
})

let interval = 1
function time(){
    // const date = new Date()
    // const time = date.toLocaleTimeString()

    document.getElementById('timer').innerText = interval++
}


setInterval(()=>{
   time()

},1000)

m