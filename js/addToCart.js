

const $addToCartButtons = conteinerProducto.querySelectorAll(".btn-secondary");
$addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);

});





function addToCart(event) {
  const button = event.target,
  product = button.closest(".card").querySelector(".card-title").textContent,
  price = button.closest(".card").querySelector(".card-text").textContent;
   
  let productLS = JSON.parse(localStorage.getItem('productos'))|| [];
 
  if(!productLS.length){
    const newProduct = {title:product, quantity:1, Price:price};
    productLS.push(newProduct);
  
    localStorage.setItem('productos',JSON.stringify(productLS))

  }else{
    const existingProduct = productLS.findIndex(prod => prod.title === product);
  

 
    if (existingProduct !== -1) {
      productLS[existingProduct].quantity++;
    
      localStorage.setItem('productos', JSON.stringify(productLS));
   
    }else{
      const newProduct = {title:product, quantity: 1, Price:price};
      productLS.push(newProduct);
    
    } 

    localStorage.setItem('productos',JSON.stringify(productLS));
  }
  
}
