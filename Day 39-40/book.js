const hotbooks = document.getElementById('hotbooks');


fetch('https://dummyjson.com/products/?limit=0')
  .then(response => response.json())
  .then(data => {
   
    const productList = data.products.map(i => ({ ...i, quantity: 0 }));

 
    hotbooks.innerHTML = productList
      .map(i => {
        return `
          <div class="w-[100px]">
            <div class="w-[100px] h-[152px] p-1 overflow-hidden object-contain">
              <img class="w-full mb-2" src="${i.thumbnail}" alt="">
            </div>
            <a href="./detail.html?id=${i.id}">
              <p class="text-slate-400 text-sm font-semibold truncate">${i.title}</p>
            </a>
            <p class="text-slate-400 text-sm truncate">${i.brand}</p>
          </div>
        `;
      })
      .join('');
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    hotbooks.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  });
