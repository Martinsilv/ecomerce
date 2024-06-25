const btnCart = document.getElementById("btnCarrito"),
modalBody = document.querySelector(".modal-body");
const productLS = JSON.parse(localStorage.getItem('productos'));

const modal = ()=>{

    modalBody.innerHTML = "";
    productLS.forEach(el => {
        const products = document.createElement("div");
      
        products.className = "productos-modal";                
        let multiplication = el.quantity*el.Price;
       
        console.log(multiplication.toFixed(2))
        products.innerHTML = `<div>${el.title}</div>
                              <button class="btn-decrease">-</button> 
                              <div class="quantity">${el.quantity}</div> 
                              <button class="btn-increase">+</button>
                  
                              <div class="result">${multiplication.toFixed(2)}</div>
                              <div class="btn-trash" id="id">
                              <lord-icon
                                  src="https://cdn.lordicon.com/wpyrrmcq.json"
                                  trigger="hover"
                                  colors="primary:#e83a30"
                                  style="width:35px;height:35px">
                              </lord-icon></div>`
             
       
        modalBody.appendChild(products)
        //sumar producto
        const increase = products.querySelector(".btn-increase");    
        increase.addEventListener("click", (e)=>{
                if (e.target) {
                    
                    el.quantity++
                    uptadePrice();
                    const result = products.querySelector(".quantity");
                result.textContent = el.quantity                                
                const resultMult = products.querySelector(".result");
                const total = el.quantity*el.Price        
                    resultMult.textContent = total.toFixed(2)
                    localStorage.setItem('productos',JSON.stringify(productLS))
                } 
         })
//restar producto
        const decrease = products.querySelector(".btn-decrease");
        decrease.addEventListener("click",(e)=>{
            if(e.target){
                if (el.quantity > 1) {  
                    el.quantity--;
                    multiplication.toFixed(2);
                  uptadePrice();
                    const result = products.querySelector(".quantity");
                result.textContent = el.quantity
                const resultMult = products.querySelector(".result");
                const total = el.quantity*el.Price;
                resultMult.textContent = total.toFixed(2)//solo muestra dos decimales
                 localStorage.setItem('productos',JSON.stringify(productLS))}
                 
                    }})
 

const btnTrash = products.querySelectorAll(".btn-trash");
  

const deletePRoduct = (title)=>{
    const findProduct = productLS.findIndex((prod)=> prod.title === title)
    productLS.splice(findProduct,1);
    modal();
    uptadePrice()
    localStorage.setItem('productos',JSON.stringify(productLS));
    

}
btnTrash.forEach((trash)=>{
    trash.addEventListener("click",()=>{deletePRoduct(el.title)});

})
        
    
  
        })
    
    
    };
    const uptadePrice = ()=>{
//total de los productos
const totalPrice= document.querySelector(".total"),

totalProduct = productLS.reduce((acc, el)=> acc + el.Price * el.quantity,0 )

totalPrice.innerHTML=`total $${totalProduct.toFixed(2)}`;
}

if(!productLS.length){
    const emptyCart = document.createElement("div")
    emptyCart.innerHTML=`<h3>tu carrito esta vacio</h3>`
    modalBody.appendChild(emptyCart)
    
}else{
    uptadePrice()

    modal()
    
}
     



