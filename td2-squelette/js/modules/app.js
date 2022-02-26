import p, {search} from "./products.js";
import {buildProductsList} from "./ui.js";
import {emptyCart} from "./cart.js";
import {load} from "./cart.js";

//permet d'initialiser la page
export const init = function(){
  
  buildProductsList(p.products); 

  let recherche = document.getElementById('product-search');

    recherche.addEventListener('keyup', (event) => {
        const nomTouche = event.key;
        if(nomTouche=='Enter'){
          buildProductsList(search(recherche.value));
        }
    })

  
  let idPanier = document.getElementById("empty-cart");

  idPanier.addEventListener('click', function(){
    emptyCart();
  })

  load();
}


