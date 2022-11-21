fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const products =data.products;
    console.log(products);
    addCardProductsToPage(products);
  
  
  function addCardProductsToPage(products) {
    const wrapper = document.querySelector('.wrapper');
      if(wrapper.children.length >0){
      while(wrapper.children.length > 0) {
        wrapper.children[0].remove();
     }; 
    }
    products.forEach((product) => {
      const itemColumnElement = createColumnElement();
      const card = createCardElement();
      const cardImage =  createCardImage(product);
      const cardBody =  createCardProduct(product);
      card.append(cardImage, cardBody);
      itemColumnElement.append(card);
      wrapperElement = document.querySelector('.wrapper'); 
      wrapperElement.append(itemColumnElement);
    });
  }

   const getValueInput = document.querySelector('.submit'); 
   const valueInput = document.querySelector ('.form-control');
   getValueInput.addEventListener('submit', getSearchProduct);
      
   
  function getSearchProduct(event) {
    event.preventDefault();
   const itemProduct = valueInput.value.trim().toLocaleLowerCase() ;
   
    if (itemProduct === '') {
      
      addCardProductsToPage(products);
    }
    const newarray= searchProduct(itemProduct);
     addCardProductsToPage(newarray);
  }

  function searchProduct (itemProduct){
     const  filteredProducts = products.filter ((item) => {
      const productTitle = item.title.toLocaleLowerCase();
      const productDescription = item.description.toLocaleLowerCase();
      if (productTitle.includes(itemProduct) || productDescription.includes(itemProduct)){
        return true;
        }  
        return  false;
     })
       return filteredProducts;    
   }
 
 
 const modalBox =document.querySelector('.modalBox')
 const btnModalBox = document.querySelector('.submit-cart');
  
 btnModalBox.addEventListener('click', openModalBox);
 
 function openModalBox (){
  modalBox.style.display = "block"
 }  
 const btnCloseModalBox =document.querySelector('.btn-close');
 btnCloseModalBox.addEventListener('click',closeModalBox);
 function closeModalBox(){
  modalBox.style.display = "none"
 }

const addCart=document.querySelectorAll('.addcart');
addCart.forEach((item) =>{
  item.addEventListener('click',CreateCart);
});

function CreateCart(event){
  products.forEach((item)=>{
  if (event.target.id == item.id){
  addCardProduct(item);
  }
  }
  )

}
 
 function addCardProduct(product) {
   
    const bodyCart=createModalCart (product);
    const inerModalBox=document.querySelector('.modal-header');
    console.log(inerModalBox);

    inerModalBox.after(bodyCart);
    

  };

  function createColumnElement() {
    return createElement('div', ['col-sm-12', 'col-md-3', 'column-item']);
  }
  
  function createCardElement() {
    return createElement('div', ['card', 'h-100']);
  }
  
  function createCardImage(product) {
    const imageAttributes = [
      {
        prop: 'src',
        value: product.thumbnail,
      },
      {
        prop: 'alt',
        value: product.title,
      },
    ];
    const imageElement = createElement('img', ['card-img-top', 'img-height'], imageAttributes);
      
    return imageElement;
    
  }
  function crateButtonAddtoCart(product) {
    const buttonAttributes = [
      {
        prop: 'type',
        value: 'button',
      },
      {
        prop: 'id',
        value: `${product.id}`,
      }
      
    ];
    const buttonAdd =createElement ('button',['btn', 'btn-primary', 'mt-2','addcart'],buttonAttributes,'Add to cart');   
    return buttonAdd;
    
  }
  
  function imgCartProduct(cart) {
    const imageAttributes = [
      {
        prop: 'src',
        value: cart.thumbnail,
      },
      {
        prop: 'alt',
        value: cart.title,
      },
    ];
    const imageElementCart = createElement('img', ['img-cart',], imageAttributes);
      
    return imageElementCart;
    
  }

  
  function createCardProduct(product) {
    const bodyTitle = createElement('h5', ['card-title'], null, product.title);
    const bodyText = createElement('p', ['card-text','h-100'], null, product.description);
    const priceElement = createElement('p',['card-text'], null, `Price: ${product.price}$`);
    const ratingElement = createElement('p', ['card-text'], null, `Rating: ${product.rating}`);
    const btnAddtoCart = crateButtonAddtoCart(product);
    const cardFooter = createElement('div', ['bottom-content'], null, null, [priceElement, ratingElement], 'append');
    const cardBody = createElement('div', ['card-body','d-flex', 'flex-column'], null, null, [bodyTitle, bodyText, cardFooter,btnAddtoCart], 'append');
  
    return cardBody;
  }


  function createModalCart (cart){
    const btnRemove = createElement('button',['btn','btn-danger','remove'],null,`Remove from order`);
    const btnPlus = createElement('button',['btn','btn-secondary'],null,`+`);
    const btnMinus = createElement('button',['btn','btn-secondary'],null,`-`);
    const divAmount = createElement('span',['badge','bg-primary'],null,`cart.amount`);
    const nameProduct =createElement('p',['text-content','flex-grow-1'],null,cart.title);
    const imgProd = imgCartProduct(cart) ;
    const cartElementBody =createElement('div',['cart-item', 'd-flex', 'justify-content-between','align-items-center','border-rounded','gap-2'],null,null,[imgProd,nameProduct,btnMinus,divAmount,btnPlus,btnRemove],'append');
     return cartElementBody;
     
    }
 


  function createElement(tag, classList, attributes, textContent, children, childrenAction) {
    const element = document.createElement(tag);
  
    if (classList?.length) {
      element.classList.add(...classList);
    }
  
    if (attributes?.length) {
      attributes.forEach(({ prop, value }) => {
        element.setAttribute(prop, value);
      });
    }
  
    if (textContent) {
      element.textContent = textContent;
    }
  
    if (children) {
      element[childrenAction](...children);
    }
  
    return element;
  }
 
   /* const btnRemove =document.querySelector('.remove');
    btnRemove=addEventListener('click', removeFromCart);

    function removeFromCart(){
     const getElement=document.querySelector('.cart-item');
     getElement.remove();
    
   }*/

  


});