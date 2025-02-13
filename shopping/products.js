let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}

let products = []
fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data => {
                products = data.map(i=>i)
                const categories = [...new Set(products.map(i => i.category))] 
                
              document.getElementById('categorySection').innerHTML = categories.flatMap(i =>{
                return `
                  <div class="flex flex-col items-center">
          
                    <p class="text-sm">${i}</p>
                  </div>
                `
              }).join('')
              document.getElementById('topOffers').innerHTML = products.map(i=> {
                return `
                  <a href="./detail.html?id=${i.id}">
                    <div class="w-[160px] flex flex-col items-center gap-1">
                        <div class=" flex items-center justify-center h-[160px] w-[160px]">
                            <img class="h-full rounded-xl" src="${i.image}" alt="">
                        </div>
                        <p class="text-sm ">$ ${i.price}</p>
                        <p class="text-sm text-green-500 flex items-center gap-2">${i.rating.rate} <i class="fas fa-star text-xs text-yellow-400"></i></p>
                    </div>
                  </a>
                `
              }).join('')

              const fashion = products.filter(i => i.category === "men's clothing" || i.category === "women's clothing")
           
              document.getElementById('fashionSale').innerHTML = fashion.flatMap(i=>{
                return `
                <a href="./detail.html?id=${i.id}">
                  <div class="w-[160px] flex flex-col items-center gap-1">
                      <div class=" flex items-center justify-center h-[230px] w-[160px]">
                          <img class="h-full rounded-xl"
                              src="${i.image}"
                              alt="">
                      </div>
                      <p class="text-sm ">$ ${i.price}</p>
                      <p class="text-sm text-green-500 flex items-center gap-2">${i.rating.rate} <i
                              class="fas fa-star text-xs text-yellow-400"></i></p>
                  </div>
                  </a>
                `
              }).join('')
              const recommended = products.filter(i => i.category === "jewelery" || i.category === "electronics")

              document.getElementById('recommended').innerHTML = recommended.map(i=>{
                return `
                <a href="./detail.html?id=${i.id}">
                  <div class="w-[160px]">
                      <div class="mb-1 flex items-center justify-center object-contain overflow-hidden h-[160px]  w-[160px]">
                          <img class="h-full rounded-xl"
                              src="${i.image}"
                              alt="">
                      </div>
                      <p class="text-sm line-clamp-2">${i.title}</p>
                      <div class="flex justify-between items-center">
                          <div class="flex gap-1">
                              <i class="fas fa-star text-xs"></i>
                              <i class="fas fa-star text-xs"></i>
                              <i class="fas fa-star text-xs"></i>
                              <i class="fas fa-star text-xs"></i>
                              <i class="fas fa-star text-xs"></i>
                          </div>
                          <p class="text-sm">$ ${i.price}</p>
                      </div>
                  </div>
                  </a>
                `
              }).join('')
            })

          