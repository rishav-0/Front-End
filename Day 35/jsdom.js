const first = document.getElementById('first')
first.style.color='red'
first.style.backgroundColor='gray'

const colortheme= document.getElementById('colortheme')
colortheme.innerText="Dark"

document.getElementsByTagName('h1')
document.getElementsByClassName('header')
document.querySelector('.header')
document.querySelectorAll('.header')
const classChange = document.getElementById('clasChange')
const theme = document.getElementById('theme')

function black(){
    
    theme.checked = !theme.checked
    
    if(!theme.checked){
        classChange.classList.add('light')
        classChange.classList.remove('dark')
        colortheme.innerText="Dark"
        console.log('1')        

    }else{
        classChange.classList.add('dark')
        classChange.classList.remove('light')
        colortheme.innerText="Light"
        console.log('2')
    }
    
}   

