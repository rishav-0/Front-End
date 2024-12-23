const profile =[ 
    {
    userName:'Dwyane Johnson',
    work:'UI Developer',
    profilePic:'https://hips.hearstapps.com/hmg-prod/images/dwayne-the-rock-johnson-gettyimages-1061959920.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*',
    phone:9365046638,
    email:'talukdar@gmail.com',
    website:'cxyz.com',
    address:'Barpet Assam',
    about:' dolor sit, amet consectetur adipisicing elit. Consequuntur mollitia cupiditate tempora assumenda dicta neque vero consectetur! Possimus sequi inventore praesentium! Dicta repellat voluptatum officia possimus maxime modi illum, id rerum totam facilis maiores eaque expedita. Nihil ut eaque consectetur.'
},
]


const workExperiences = [
    {
        company:'Google',
        startYear:'2015',
        endYear:'2017',
        post:'UI Developer',
        details:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut repellat eaque, excepturi enim quis debitis maxime sunt quaerat iusto accusamus minima vel ad dolorum praesentium asperiores voluptas assumenda, soluta ex!',
        
    },
  
]

const workEducation = [
    
   
]

const skills = {
    professional:[
        {
            skill:'Communicaion',
            level:'70',
        },
        {
            skill:'Leadership',
            level:'90',
        },
    ],
    Personal:[
        {
            skill:'HTML',
            level:'90',
        },
        {
            skill:'Css',
            level:'90',
        },
        {
            skill:'JS',
            level:'30',
        },
    ],
}

const interests = ['Bicycle','Gaming','Video','Music'] 

const references =  [
    {
        refName:'Jane Doe',
        address:{
        district:'Barpeta',
        state:'Assam'
        },
        phone:749837394,
        mail:'email@gmail.com'
    },
    {
        refName:'Roman Reigns',
        address:{
        district:'Ohio',
        state:'California'
        },
        phone:749837394,
        mail:'email@gmail.com'
    },
]

const namePost = document.getElementById('namePost')
const communication  = document.getElementById('communication')
const abouts = document.getElementById('about')
const register = document.getElementById('register')
const workexperience = document.getElementById('workExperience')
const education = document.getElementById('workEducation')
const showExperience = document.getElementById('showExperience')
const eductation = document.getElementById('eductation')
const profSkills = document.getElementById('profSkills')
const personalSkills = document.getElementById('personalSkills')
const skilladdpersonal = document.getElementById('skilladdpersonal')
const skilladdprof = document.getElementById('skilladdprof')


register.addEventListener('submit',function(event){
    event.preventDefault()
    submitform()
})

workexperience.addEventListener('submit',function(event){
    event.preventDefault()
    addWork()
})

education.addEventListener('submit', function(event){
    event.preventDefault()
    addEducation()
})

skilladdpersonal.addEventListener('submit',function (event){
    event.preventDefault()
    addSkillspersonal()
})

skilladdprof.addEventListener('submit',function (event){
    event.preventDefault()
    addSkillsprof()
})

function submitform(){
    profile.push({
        id:Date.now(),
        userName:document.getElementById('name').value,
        work:document.getElementById('position').value,
        profilePic:document.getElementById('profile').value,
        phone:document.getElementById('phone').value,
        email:document.getElementById('email').value,
        website:document.getElementById('website').value,
        about:document.getElementById('about').value,
        address:document.getElementById('address').value,
    })
    console.log(profile)
}

function addWork(){
    workExperiences.push(
        {
            company:document.getElementById('companyName').value,
            startYear:document.getElementById('startYear').value,
            endYear:document.getElementById('endYear').value,
            post:document.getElementById('companyPosition').value,
            details:document.getElementById('aboutCompany').value
        }
    )
    console.log(workExperiences)
    displayExperience()
}

function addEducation(){
    workEducation.push(
        {
            company:document.getElementById('companyName').value,
            startYear:document.getElementById('startYear').value,
            endYear:document.getElementById('endYear').value,
            post:document.getElementById('companyPosition').value,
            details:document.getElementById('aboutCompany').value
        }
    )
    console.log(workEducation)
    displayEducation()
}

function addSkillspersonal(){
    skills.Personal.push({
        skill:document.getElementById('skillName').value,
        level:document.getElementById('skillLevel').value
    }
    )
    displaySkills()
}

function addSkillsprof(){
    skills.professional.push({
        skill:document.getElementById('skillName').value,
        level:document.getElementById('skillLevel').value
    }
    )
    displaySkills()
}

namePost.innerHTML = profile.map(i=>{
    return`
        <p class="text-4xl font-bold whitespace-nowrap">${i.userName}</p>
        <p class="whitespace-nowrap">${i.work}</p>
    `
})

communication.innerHTML = profile.map(i=>{
return`
    <div class="flex gap-2 items-center">
        <i class="fas fa-phone border-b-4 border-slate-600 pb-2"></i>
        <div class="">
            <p class="text-sm">Phone</p>
            <p class="text-sm text-slate-400">${i.phone}</p>
        </div>
    </div>
    <div class="flex gap-2 items-center">
        <i class="fas fa-envelope border-b-4 border-slate-600 pb-2"></i>
        <div class="">
            <p class="text-sm">Email</p>
            <p class="text-sm text-slate-400">${i.email}</p>
        </div>
    </div>
    <div class="flex gap-2 items-center">
        <i class="fas fa-window-maximize border-b-4 border-slate-600 pb-2"></i>
        <div class="">
            <p class="text-sm">Website</p>
            <p class="text-sm text-slate-400">${i.website}</p>
        </div>
    </div>
`
})

abouts.innerHTML = profile.map(i=>{
    
    return`
        <div class="col-md-4 py-4">
            <p class="border-b-2 pb-2 mb-3 inline-block border-slate-700">Address</p>
            <p class="text-slate-400">${i.address}</p>
        </div>
        <div class="col-md-2 py-4 flex items-center flex-col">
            <div class="h-3 mb-3 w-100 flex items-center justify-center bg-[#e8cc17]">
                <p class="text-2xl font-semibold">Profile</p>
            </div>
            <div
                class="flex items-center justify-center object-contain h-[80px] w-[80px] overflow-hidden rounded-full">
                <img class="w-full"
                    src="${i.profilePic}"
                    alt="">
            </div>
        </div>
        <div class="col-md-6 flex items-end">
            <p class="text-slate-400">
            ${i.about}
            </p>
        </div>
    `
})

function displayExperience(){
    showExperience.innerHTML = workExperiences.map(i =>{
    return`
        <div class="col-md-3 py-5">
                        <p class="font-semibold">${i.startYear}-${i.startYear}</p>
            <p class="text-slate-400">${i.company}</p>
            
        </div>
        <div class="col-md-9  py-5">
            <p class="font-semibold">${i.post}</p>
            <p class="text-slate-400">${i.details}</p>
        </div>
        
    `
}).join('')
}

function displayEducation(){
    eductation.innerHTML = workEducation.map(i =>{
    return`
        <div class="col-md-3 py-5">
                        <p class="font-semibold">${i.startYear}-${i.endYear}</p>
            <p class="text-slate-400">${i.company}</p>
            
        </div>
        <div class="col-md-9  py-5">
            <p class="font-semibold">${i.post}</p>
            <p class="text-slate-400">${i.details}</p>
        </div>
    `
}).join('')
}



function displaySkills(){
    profSkills.innerHTML  = skills.professional.map(i=>{
        console.log(i)
        return `
            <div class="flex gap-2 items-center mb-2">
                <p class="text-sm w-1/2">${i.skill}</p>
                <div class="bg-black w-1/2 h-1 overflow-hidden rounded-sm">
                    <div class="bg-[#e8cc17] w-[${i.level}%] h-1"></div>
                </div>
            </div>
        `
    }).join('')

    personalSkills.innerHTML  = skills.Personal.map(i=>{
        
        return `
            <div class="flex gap-2 items-center mb-2">
                <p class="text-sm w-1/2">${i.skill}</p>
                <div class="bg-black w-1/2 h-1 overflow-hidden rounded-sm">
                    <div class="bg-[#e8cc17] w-[${i.level}%] h-1"></div>
                </div>
            </div>
        `
    }).join('')

}