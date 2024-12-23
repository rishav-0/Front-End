
// let phone={
//     brand:'Motorola',
//     series:'edge',
//     model:'40 neo'
// }

// let user={
//     userName:'rishav talukar',
//     phone:93650466388,
//     email:'talukdarrishav@outlook.com',
//     education:{
//         school:'BCSSN',
//         college:'lcbc'
//     },
//     addresss:{
//         vill:'rauly',
//         dist:'barpeta',
//         city:'guwahati'
//     }
// }


// let arr=[phone,user];

// console.log(arr[0],arr[1])


// let a=10
// let b=a
// b=20

// console.log(a,b,a==b)
// let user={  fname:'rishav'}
// let person=user
// person.fname='dhoni'

// console.log(user,person,user==person)



let courses = [
  {
    courseCategory: "Mechanical",
    course: ["autocad", "creo", "catia", "cnc programming", "nx cad", "nx cam"]
  },
  {
    courseCategory: "Civil & architecture",
    course: ["autocad", "civil 3d", "etabs", "lumion", "mx road", "ms project"]
  },
  {
    courseCategory: "Electrical",
    course: ["autocad electrical", "Plc", "Scada"]
  }
];
const filterdata = courses.find(
  (course) => course.courseCategory === "Mechanical"
);
console.log(courses,filterdata)