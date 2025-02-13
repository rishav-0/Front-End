const a = new URLSearchParams(window?.location?.search)
const id = a.get('id')

console.log(id)
fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res=>res.json())
              .then(data => {
                console.log(data)
                document.getElementById('thumbnail').src = data.image
                document.getElementById('title').innerText = data.title
                document.getElementById('desc').innerText = data.description
                document.getElementById('price').innerText = `$ ${data.price}`
                document.getElementById('rating').innerText = data.rating.rate
                document.getElementById('countRating').innerText = `(${data.rating.count} Reviews)`


              })
              .catch(error => {
    console.error("Error fetching products:", error);
    hotbooks.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  });