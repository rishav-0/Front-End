const registerform = document.getElementById('registerform')
const email = document.getElementById('email')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const phone = document.getElementById('phone')
const sitelink = document.getElementById('sitelink')
const yourdata = document.getElementById('yourdata')


registerform.addEventListener('submit',function(event){
    event.preventDefault()
    register()
})

const info=[]

function register(){
    
    info.push({
        id:Date.now(),
        email:email.value,
        fName:fName.value,
        lName:lName.value,
        phone:phone.value,
        sitelink:sitelink.value
    })
    
    localStorage.setItem('register',JSON.stringify(info))
    clears()
   renderdata()
}

function clears(){
    email.value=''
    fName.value=''
    lName.value=''
    phone.value=''
    sitelink.value=''
}
function renderdata(){
    const registerdata = localStorage.getItem('register')
    const newdata =JSON.parse(registerdata)
    console.log(newdata)
    console.table(newdata)
    yourdata.innerHTML = newdata.map((i)=>{
        return`
        <div class="border-1 rounded-lg mb-3">
            <div class="p-3  ">
                <p class="text-black text-sm text-semibold"> ${i.fName} ${i.lName}</p>
                <p class="text-slate-500 text-sm"> ${i.email}  </p>
                <p class="text-slate-500 text-sm"> ${i.phone} </p>
                <p class="text-blule-400 text-sm "> ${i.sitelink} </p>
            </div>
        </div>
        `
    }).join("")
}
renderdata()