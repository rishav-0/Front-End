const register = document.getElementById('register')
const work = document.getElementById('workExperience')
const education = document.getElementById('education')
const skilladdpersonal = document.getElementById('skilladdpersonal')
const skillAddProf = document.getElementById('skillAddProf')

register.addEventListener('submit',function(event){
    event.preventDefault()
    submitform()
})



function submitform(){
        userName = document.getElementById('name').value
        position = document.getElementById('position').value
        address = document.getElementById('address').value
        phone = document.getElementById('phone').value
        email = document.getElementById('email').value
        website = document.getElementById('website').value
        profile = document.getElementById('profile').value
        about = document.getElementById('about').value
    
        document.getElementById('myname').innerText = userName
        document.getElementById('myposition').innerText = position
        document.getElementById('myposition').innerText = phone
        document.getElementById('myemail').textContent = email
        document.getElementById('mywebsite').textContent = website
        document.getElementById('myaddress').textContent = address
        document.getElementById('aboutMe').textContent = about
}

work.addEventListener('submit',function(event){
    event.preventDefault()
    submitwork()
})

const workCompany =[]

function submitwork(){
    workCompany.push({
        company : document.getElementById('companyName').value,
        position : document.getElementById('companyPosition').value,
        startYear : document.getElementById('startYear').value,
        endYear : document.getElementById('endYear').value,
        aboutCompany : document.getElementById('aboutCompany').value,
    })

    displayWork()
}

function displayWork(){
    document.getElementById('showExperience').innerHTML = workCompany.map(i=>{
        return `
             <div class="col-md-3 py-5">
                <p class="font-semibold">${i.startYear}-${i.endYear}</p>
                <p class="text-slate-400">${i.company}</p>

            </div>
            <div class="col-md-9  py-5">
                <p class="font-semibold">${i.position}</p>
                <p class="text-slate-400">${i.aboutCompany}</p>
            </div>
        `
    }).join('')
}

education.addEventListener('submit',function(event){
    event.preventDefault()
    submitEducation()
})

const educationList =[]

function submitEducation(){
    educationList.push({
        institute : document.getElementById('instituteName').value,
        position : document.getElementById('positionEdu').value,
        startYearEdu : document.getElementById('startYearEdu').value,
        endYearEdu : document.getElementById('endYearEdu').value,
        aboutEdu : document.getElementById('aboutEdu').value
    })

    displayEducation()
}

function displayEducation(){
    document.getElementById('eductationDispllay').innerHTML = educationList.map(i=>{
        return `
            <div class="col-md-3 py-5">
                <p class="font-semibold">${i.startYearEdu}-${i.endYearEdu}</p>
                <p class="text-slate-400">${i.institute}</p>

            </div>
            <div class="col-md-9  py-5">
                <p class="font-semibold">${i.position}</p>
                <p class="text-slate-400">${i.aboutEdu}</p>
            </div>
        `
    }).join('')
}

skilladdpersonal.addEventListener('submit',function(event){
    event.preventDefault()
    addPersonalSkills()
})

const personalSkills = []

function addPersonalSkills(){
    personalSkills.push({
        skill: document.getElementById('skillName').value,
        skillLevel : document.getElementById('skillLevel').value,
    })
    displayPersonalSkills()
}

function displayPersonalSkills(){
    document.getElementById('showPersonalSkills').innerHTML = personalSkills.map(i=>{
        return `
            <div class="flex gap-2 items-center mb-2">
                <p class="text-sm w-1/2">${i.skill}</p>
                <div class="bg-black w-1/2 h-1 overflow-hidden rounded-sm">
                    <div class="bg-[#e8cc17] w-[${i.skillLevel*10}%] h-1"></div>
                </div>
            </div>
        `
    }).join('')
}

skillAddProf.addEventListener('submit',function(event){
    event.preventDefault()
    addProfSkills()
})

const professionalSkills = []

function addProfSkills(){
    professionalSkills.push({
        skill: document.getElementById('skillNameProf').value,
        skillLevel : document.getElementById('skillLevelProf').value,
    })
    displayProfSkills()
}

function displayProfSkills(){
    document.getElementById('profSkills').innerHTML = professionalSkills.map(i=>{
        return `
            <div class="flex gap-2 items-center mb-2">
                <p class="text-sm w-1/2">${i.skill}</p>
                <div class="bg-black w-1/2 h-1 overflow-hidden rounded-sm">
                    <div class="bg-[#e8cc17] w-[${i.skillLevel*10}%] h-1"></div>
                </div>
            </div>
        `
    }).join('')
}