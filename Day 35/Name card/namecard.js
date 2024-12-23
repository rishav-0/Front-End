const registerform = document.getElementById('registerform')
const card = document.getElementById('card');
const suggestions = document.getElementById('suggest');
const skillset = document.getElementById('skillset');
const rightdiv = document.getElementById('rightdiv')

const users=[]

const suggest=[
    {
        head:'Ready to Work',
        detail:'SHow recruiters that you are need for work.'
    },
    {
        head:'Share Posts',
        detail:'SHow recruiters that you are need for work.'
    },
    {
        head:'Update',
        detail:'SHow recruiters that you are need for work.'
    },
]

registerform.addEventListener('submit',function(event){
    event.preventDefault()
    rightdiv.classList.remove('hidden')
    register()
})

function register(){
    const fullName= document.getElementById('fullName').value
    const profileLink= document.getElementById('profileLink').value
    const currentRole= document.getElementById('currentRole').value
    const address = document.getElementById('address').value
    const skills= document.getElementById('skills').value

    users.push({
        id:Date.now(),
        fullName:fullName,
        profile:profileLink,
        currentRole:currentRole,
        address:address,
        skills:skills.split(',').map(skill => skill.trim()).filter(skill => skill !== ''),
    })
    console.log(users)
    renderCard()
    renderSkills()
    renderSuggestions()
}

function renderCard(){
    card.innerHTML= users.map(user => {
        return`
            <div class="">
                <div
                    class="rounded-full border-4 overflow-hidden object-cover border-white h-[100px] w-[100px] flex items-center justify-center">
                    <img class="w-100" src="${user.profile}" alt="">
                </div>
                <p class="h2 capitalize">${user.fullName}</p>
                <p class="text-secondary">${user.currentRole}</p>
                <p class="text-secondary">${user.address}</p>
            </div>
            <div class="place-items-end">
                <p class="text-secondary mb-1">Current role</p>
                <p class="rounded-pill bg-slate-100 p-2 py-1">${user.currentRole}</p>
            </div>
        `
    }).join('')
}

function renderSkills(){
    const allskill = users.flatMap(user => user.skills);
    skillset.innerHTML=allskill.map(i =>{
        return `
            <p class="rounded-pill p-2 bg-[#f7ede7] py-1">${i}</p>
        `
    }).join('')
}

function renderSuggestions(){
    suggestions.innerHTML = suggest.map(i=>{
        return`
            <div class="bg-slate-100 rounded-lg p-2 flex items-center justify-between">
                <div class="">
                    <p class="">${i.head}</p>
                    <p class="text-secondary text-sm  line-clamp-2">${i.detail}.</p>
                </div>
                <a href="./signup.html">
                    <div class="rounded-circle h-[30px]  w-[30px] border-2 border-blue-600 flex items-center justify-center">
                        <i class="fas fa-arrow-right text-sm text-blue-600"></i>
                    </div>
                </a>
            </div>
        `
    }).join("")
}

