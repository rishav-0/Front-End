const a = new URLSearchParams(window?.location?.search)
const id = a.get('id')

let cartItems = []

fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res=>res.json())
              .then(data => {
                cartItems = data.map(i=>({...i,quantity:0}))

              })
              .catch(error => {
    console.error("Error fetching products:", error);
    hotbooks.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  });