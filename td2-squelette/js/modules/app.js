import p from "./products.js";
import {buildProductsList} from "./ui.js";


export const init = function(){
  
  buildProductsList(p.products);  

}

