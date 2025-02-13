const books = [
    {
        id:1,
        title: 'Atomic Habits',
        image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
        author: 'James Clear',
        caption: 'Tiny Changes, Remarkable Results',
        price: 35,
        desc: 'Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies to form good habits, break bad ones, and master tiny behaviors that lead to remarkable results.',
    },
    {
        id:2,
        title: 'The Subtle Art of Not Giving a F*ck',
        image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg',
        author: 'Mark Manson',
        caption: 'A Counterintuitive Approach to Living a Good Life',
        price: 28,
        desc: 'In this refreshing take on self-help, Mark Manson explains why caring less about things that dont matter can help you focus on what truly does.',
    },
    {
        id:3,
        title: 'Think and Grow Rich',
        image: 'https://m.media-amazon.com/images/I/71UypkUjStL.jpg',
        author: 'Napoleon Hill',
        caption: 'Success Principles from the Masters',
        price: 25,
        desc: 'This classic book outlines Napoleon Hills philosophy on success, with timeless lessons on financial independence and personal growth.',
    },
    {
        id:4,
        title: 'Sapiens: A Brief History of Humankind',
        image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL.jpg',
        author: 'Yuval Noah Harari',
        caption: 'Understanding Human History',
        price: 40,
        desc: 'Sapiens explores the history of humankind from the Stone Age to the modern age, examining how biology and history have shaped our societies.',
    }
]

const hotbooks = document.getElementById('hotbooks')
// const detail = document.getElementById('bookdetail')

hotbooks.innerHTML = books.map(i=>{
    return `
        <div class="w-[100px]" >
            <div class="w-[100px] h-[152px] p-1 overflow-hidden object-contain ">
                <img class="w-full mb-2" src="${i.image}" alt="">
            </div>
                <a href="./detail.html?id=${i.id}">
                 <p class="text-slate-400 text-sm font-semibold truncate ">${i.title}</p>  
                </a>
                <p class="text-slate-400 text-sm truncate">${i.author}</p>  
        </div>
    `
}).join('')


