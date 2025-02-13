const a = new URLSearchParams(window?.location?.search)
const id = a.get('id')


fetch(`https://dummyjson.com/products/${id}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    document.getElementById('bookimage').src = data.thumbnail
    document.getElementById('booktitle').textContent = data.title
    document.getElementById('author').textContent = `Author: ${data.brand}`
    document.getElementById('caption').textContent = data.caption
    document.getElementById('detail').textContent = data.description
    document.getElementById('price').textContent = `$ ${data.price}`
    
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    hotbooks.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  });


  