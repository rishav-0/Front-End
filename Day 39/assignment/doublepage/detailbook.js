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

const a = new URLSearchParams(window?.location?.search)
    const id = a.get('id')
    console.log(id)
    const book = books.find(i => i.id === +id)
    console.log(book)

    document.getElementById('bookimage').src = book.image
    document.getElementById('booktitle').textContent = book.title
    document.getElementById('author').textContent = `Author: ${book.author}`
    document.getElementById('caption').textContent = book.caption
    document.getElementById('detail').textContent = book.desc
    document.getElementById('price').textContent = `$ ${book.price}`

    console.log(this)
    const data = {
        name:'rishav',
        age:22,
        weight:63,
        detail:this.age,
    }

    console.log(data)