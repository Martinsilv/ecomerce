const conteinerProducto = document.getElementById("card-conteiner")

function showProduct(product) {
const $fragment = document.createDocumentFragment();
    product.forEach(el => {

    const conteiner = document.createElement("div")
     conteiner.innerHTML=`<div class="card" id="card" style="width: 15rem;">
     <img src="${el.image}" class="card-img-top" alt="producto:${el.title}">
     <div class="card-body">
       <h5 class="card-title">${el.title}</h5>
       <p class="card-text">${el.price}</p>
       <a href="#" class="btn btn-primary">comprar</a>
       <button type="button" class="btn btn-secondary" >Añadir al carrito</button>
     </div>
   </div>`
      
   

   $fragment.appendChild(conteiner);
   conteinerProducto.appendChild($fragment) 

    });
    
}
showProduct(productos)






































/* 
function addToCart(event){
const button = event.target,
product = button.closest(".card").querySelector(".card-title").textContent;//closest trae el elemento padre mas cercano con la clase card,y traemos el  text de title de la cards 

let productLS = JSON.parse(localStorage.getItem('productos'))||[];

if (!productLS.length) {
  const newProduct = { title: product, quantity: 1};
   productLS.push(newProduct);
  localStorage.setItem('productos',JSON.stringify(productLS));
}else{
  const existingProduct = productLS.findIndex(prod => prod.title === product);
  console.log(existingProduct);

  if(existingProduct !== -1){
    
     productLS[existingProduct].quantity++;
      } else {
    const newProduct = { title: product, quantity: 1};
    productLS.push(newProduct);
  }
  
  
localStorage.setItem('productos',JSON.stringify(productLS));

} 


}  */