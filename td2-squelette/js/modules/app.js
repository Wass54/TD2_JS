import p, {search} from "./products.js";
import {buildProductsList} from "./ui.js";
import {emptyCart} from "./cart.js";
import {load} from "./cart.js";


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


  //--- ESSAIE 
  /*
	let element = document.createElement("div");
	element.querySelector(".product-add2cart").addEventListener('click', function(e){
		addToCart(p.products);
	});*/

  // save();
  load();
}


