const tabs = ['Home', 'Contact', 'About', 'Plans']
const tab = document.getElementById('tab')

let active = 'Home'

const setTab = (i) => {
    active = i
    renderNav()
    renderTab(i)
}

const renderNav = () => {
    document.getElementById('navbar').innerHTML = tabs.map(i => {
        return `
            <p class="text-sm cursor-pointer ${active === i ? 'font-bold' : ''}" id="${i}" onclick="setTab('${i}')">${i}</p>
        `
    }).join('')
}


function renderTab(i) {
    console.log(i)
    const show = document.getElementById('show')
    show.textContent = `You are on tab ${i}`
}

renderNav()
renderTab('Home')