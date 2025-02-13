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
const detail = document.getElementById('bookdetail')

function bookDetail(book){
    console.log(book.desc)
    setTimeout(()=>console.log('hello'),1000)
    detail.classList.remove('hidden')
    detail.innerHTML = `
        <div class="w-[375px] h-full bg-white p-3 border-2 relative no-scrollbar overflow-y-auto">
                <div class="mb-2">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div class="mb-3">
                    <div class="  p-2 relative">
                        <img class="w-[100px] shadow-md"
                            src="${book.image}"
                            alt="">
                        <div class="w-full shadow-md  h-[120px] bottom-0 left-0 absolute">
                            <div class="ms-[108px] p-2">
                                <div class="flex justify-between items-center">
                                    <p class="font-semibold text-lg truncate">${book.title}</p>
                                    <i class="fas fa-ellipsis cursor-pointer text-slate-400"></i>
                                </div>
                                <p class="text-slate-400 text-sm mb-2 ">Author: ${book.author}</p>
                                <p class="text-slate-400 text-xs line-clamp-2 mb-2">${book.caption}</p>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <p class="text-yellow-400">5.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-y-2 flex justify-between p-2 mb-3">
                    <p class="text-slate-400">
                        <i class="fas fa-heart"></i>
                        Like
                    </p>
                    <p class="text-slate-400">
                        <i class="fas fa-share"></i>
                        Share
                    </p>
                    <p class="text-slate-400">
                        <i class="fa-solid fa-book"></i>
                        Bookshelf
                    </p>
                </div>
                <p class="playfair font-semibold mb-3">Details</p>
                <p class="text-sm font-semibold text-slate-500 mb-3">${book.desc}</p>
                <div class="border-y-2 flex justify-between items-center mb-3">
                    <p class="playfair">Check the directory</p>
                    <i class="fas fa-angle-right text-slate-400 py-3"></i>
                </div>
                <div class="shadow-sm absolute bottom-0 w-full  left-0">
                    <div class="flex justify-between items-center p-2">
                        <div class="flex items-center gap-3">
                            <p class="playfair font-semibold text-lg">$${book.price}</p>
                            <strike>$65.00</strike>
                        </div>
                        <button class="px-4 py-1 bg-blue-900 rounded-sm text-white">Buy</div>
                    </div>
                </div>
            </div>
    `
}

hotbooks.innerHTML = books.map(i=>{
    return `
        <div class="w-[100px]" onclick='bookDetail(${JSON.stringify(i)})'>
            <div class="w-[100px] h-[152px] p-1 overflow-hidden object-contain ">
                <img class="w-full mb-2" src="${i.image}" alt="">
            </div>
                <p class="text-slate-400 text-sm font-semibold truncate ">${i.title}</p>  
                <p class="text-slate-400 text-sm truncate">${i.author}</p>  
        </div>
    `
}).join('')

