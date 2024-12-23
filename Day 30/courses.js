// const course={
//     courseBanner:"https://img.freepik.com/free-vector/hand-drawn-online-college-template-design_23-2150574159.jpg",
//     coach:{
//         coachName:"Brnd Smith",
//         coachImage:"https://img.freepik.com/free-vector/hand-drawn-online-college-template-design_23-2150574159.jpg",
//     },
//     review:[
//         {
//             starcount:4,
//             comment:"very good course"
//         },
//         {
//             starcount:5,
//             comment:"very very good course"
//         },
//     ],
//     courseTitle:"Advanced 3d Modeling in Blender",
//     CourseDescription:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa a numquam perferendis, esse laboriosam mollitia exercitationem ratione temporibus eius iusto molestiae maiores libero ducimus, asperiores veniam sequi deserunt ad officia est! Explicabo fugiat doloribus aut debitis tempora, cum reprehenderit, quo similique fuga ea, esse commodi ex sit facere libero. ",
//     content:[
//         {
//             chapterName:'Introduction',
//             chapterDescription:'very good course',
//             video:'',
//         },
//         {
//             chapterName:'Preparing  the Character',
//             chapterDescription:'very good course',
//             video:'',
//         },
//         {
//             chapterName:'Set up Blender',
//             chapterDescription:'very good course',
//             video:'',
//         }
//     ],
//     price:'49.99',
//     lessons:12,
//     difficulty:'Moderate',
//     students:3215,
//     subtitles:["English","Spanish","French","Italian","Russian","Polish","Dutch","German"],
//     resources:12,
//     duration:{
//         hours:8,
//         minutes:23
//     },
//     critiqueSession:"individual Recordings",
//     certificate:"upon completion of the course",
//     buyOptions:["Enroll a course","Buy as gift"],
//     assignment:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa a numquam perferendis, esse laboriosam mollitia exercitationem ratione temporibus eius iusto molestiae maiores libero ducimus, asperiores veniam sequi deserunt ad officia est! Explicabo fugiat doloribus aut debitis tempora, cum reprehenderit, quo similique fuga ea, esse commodi ex sit facere libero. ",
//     prerequrities:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa a numquam perferendis, esse laboriosam mollitia exercitationem ratione temporibus eius iusto molestiae maiores libero ducimus, asperiores veniam sequi deserunt ad officia est! Explicabo fugiat doloribus aut debitis tempora, cum reprehenderit, quo similique fuga ea, esse commodi ex sit facere libero. ",
//     materials:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa a numquam perferendis, esse laboriosam mollitia exercitationem ratione temporibus eius iusto molestiae maiores libero ducimus, asperiores veniam sequi deserunt ad officia est! Explicabo fugiat doloribus aut debitis tempora, cum reprehenderit, quo similique fuga ea, esse commodi ex sit facere libero. ",
// }
// const subs=course.subtitles?.map((i)=>i);
const course = {
    courseBanner: "https://t4.ftcdn.net/jpg/07/38/45/31/360_F_738453177_mayK5Y2v6AtCQXU8fL4wCe1hfBJM2foc.jpg",
    coach: {
        coachName: "Brnd Smith",
        coachImage: "https://img2.uquiz.com/content/images/personalities/personality_images/1146645_1710141457_34851b3a-b316-47de-bb20-a0de4b0fe1a6.jpg",
    },
    review: [
        {
            starcount: 4,
            comment: "very good course"
        },
        {
            starcount: 5,
            comment: "very very good course"
        },
    ],
    courseTitle: "Advanced 3D Modeling in Blender",
    CourseDescription: "Master the art of 3D modeling with this advanced course in Blender. Perfect your skills and create stunning, professional-level projects with our comprehensive curriculum.",
    content: [
        {
            chapterName: 'Introduction',
            chapterDescription: 'Start your journey with an overview of what to expect from this course, including the key concepts and tools you will learn.',
            video: '',
        },
        {
            chapterName: 'Preparing the Character',
            chapterDescription: 'Learn the essential techniques for preparing a character model, from concept to execution.',
            video: '',
        },
        {
            chapterName: 'Set up Blender',
            chapterDescription: 'Get hands-on with Blender, setting up your workspace, and familiarizing yourself with its powerful features.',
            video: '',
        }
    ],
    price: '49.99',
    lessons: 12,
    difficulty: 'Moderate',
    students: 3215,
    subtitles: ["English", "Spanish", "French", "Italian", "Russian", "Polish", "Dutch", "German"],
    resources: 12,
    duration: {
        hours: 8,
        minutes: 23
    },
    critiqueSession: "individual Recordings",
    certificate: "upon completion of the course",
    buyOptions: ["Enroll a course", "Buy as gift"],
    others:[
        {
            cName:'Assignment',
            cDetail:'Complete various assignments to solidify your understanding and apply what you have learned in practical scenarios. ',
        },
        {
            cName:'Prerequireties',
            cDetail:'Basic knowledge of Blender is recommended but not required. A passion for 3D modeling and creativity is all you need to get started. ',
        },
        {
            cName:'Materials',
            cDetail:'All necessary materials will be provided, including downloadable resources and project files to practice along with the lessons.',
        },
    ],
   
};


const subs=course?.subtitles.join(", ");
const tableofcontent=course?.content?.map((i)=>{
    return `
    <details class="bg-gray-300 p-3 rounded-3 mb-3">
        <summary>${i.chapterName}</summary>
        <p>${i.chapterDescription}</p>
    </details>
    `;
}).join('');
const others=course?.others?.map((i)=>{
    return `
        <p class="text-secondary pt-4 text-xs uppercase mb-2">${i.cName}</p>
        <p class=" text-xs uppercase mb-2">${i.cDetail}</p>      
    `;
}).join('');
// document.getElementById('contentTable').innerHTML=tableofcontent;
const reviewCount=course?.review.length;
document.getElementById('main').innerHTML=`
<div class="row mx-0">

            <div class="col-md-6 mb-3">
                <div class="">
                    <img src="${course.courseBanner}"
                        alt="" class="w-100 rounded-4">
                    
                    <div class="mt-[-40px]  w-100 px-4 py-2">  
                        <div class="flex justify-between">
                            <div class="border-4 border-white rounded-3 object-contain w-[60px] h-[60px] overflow-hidden">
                                <img src="${course?.coach?.coachImage}"
                                    alt="" class="w-100">
                            </div>
                            <div class="">
                                <p class="text-xs text-black">${reviewCount} Reviews</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4">
                    <p class="text-xs text-secondary">A course by / <span class="text-black font-medium">${course?.coach?.coachName}</span></p>
                    <p class="text-2xl">${course.courseTitle}</p>
                    <br />
                    <p class="text-secondary">${course.CourseDescription}</p>
                    <br />
                    <p class="text-secondary text-xs uppercase mb-2">Course table of content</p>
                    ${tableofcontent}
                   

                </div>


            </div>
            <div class="col-md-6 mb-3">
                <div class="p-4">
                     <p class="text-2xl">${course.price} <span class="text-sm">INR</span></p>
                <div class="border-2 border-slate-200 flex flex-wrap  rounded-lg mb-3">
                    <div class="flex items-center w-50 gap-2 p-2  border-e-2">
                        <i class="fas fa-book"></i>
                        <div class="">
                            <p class="text-xs text-secondary">LESSONS</p>
                            <p class="text-xs ">${course.lessons}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 p-2 ">
                        <i class="fas fa-book"></i>
                        <div class="">
                            <p class="text-xs text-secondary">DIFFICULTY</p>
                            <p class="text-xs ">${course.difficulty}</p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/student.png" alt="">
                    </div>
                    <p class="text-secondary">Students:</p>
                    <p class="font-semibold">${course.students}</p>
                </div>
                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/cc.png" alt="">
                    </div>
                    <p class="text-secondary">Language:</p>
                    <p class="font-semibold">English</p>
                </div>
                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/cc.png" alt="">
                    </div>
                    <p class="text-secondary">Subtitles:</p>
                    <p class="font-semibold">${subs}</p>

                </div>

                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/resource.png" alt="">
                    </div>
                    <p class="text-secondary">Additional Resources:</p>
                    <p class="font-semibold">${course.resources} files</p>
                </div>
                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/duration.png" alt="">
                    </div>
                    <p class="text-secondary">Duration:</p>
                    <p class="font-semibold">${course.duration.hours}h ${course.duration.minutes}m</p>
                </div>
                <div class="flex gap-2 mb-2">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/chat.png" alt="">
                    </div>
                    <p class="text-secondary">Critique session:</p>
                    <p class="font-semibold">${course.critiqueSession}</p>
                </div>
                <div class="flex gap-2 mb-3">
                    <div class="w-7 h-7 object-contain">
                        <img class="w-100" src="./images/certificate.png" alt="">
                    </div>
                    <p class="text-secondary">Certificate:</p>
                    <p class="font-semibold">${course.certificate}</p>
                </div>
                <div class="flex flex-wrap gap-2 pb-4 border-b-2">
                    <button class="btn btn-dark text-nowrap">${course.buyOptions[0]}</button>
                    <button class="btn btn-outline-dark text-nowrap">${course.buyOptions[1]}</button>
                </div>
                ${others}

                </div>
               
            </div>
        </div>
`;