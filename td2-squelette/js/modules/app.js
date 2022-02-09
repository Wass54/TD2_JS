import p from "./products.js";
import {buildProductsList} from "./ui.js";


export const init = function(){
  

  buildProductsList(p.products); 



  let recherche = document.getElementById('product-search');

    recherche.addEventListener('keyup', (event) => {
    const nomTouche = event.key;

    console.log(recherche.value);
    if(nomTouche=='Enter'){
      buildProductsList(p.search(recherche.value));
    }



})
}

