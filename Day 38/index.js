const details = document.getElementById('details')

function client(){
    console.log('Pending')
    setTimeout(()=>{console.log('Completed')},3000)
}


try{
    something()
}
catch(error){
    console.log('something went wrong')
}
finally{
    console.log('render complete')
}

client()
let product = []
fetch('https://dummyjson.com/products/?limit=194')
      .then(response => response.json())
      .then(data => {
            let productList = data.products
            details.innerHTML = productList?.map(i =>{
                return `
                <h1>${i.title}</h1>
                `
            }).join('')
      })
