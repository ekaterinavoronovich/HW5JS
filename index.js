fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const products =data.products;
    products.forEach(product => {
      let InnerHTML = `
   <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top img-height" alt="product">
          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text text-height">${product.description}</p>
                <div class ="bottom-content">
                  <p class ="card-text">Price:${product.price}$</p>
                  <p class="card-text">Rating:${product.rating}</p>
                </div>
          </div>
      </div>
    </div>     
    `;
    const  getdiv =document.querySelector('.wrapper');
    getdiv.classList.add('gy-5');
    getdiv.insertAdjacentHTML('beforeend', InnerHTML); 
   });
  });
   



