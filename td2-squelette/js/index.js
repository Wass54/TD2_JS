import m1 from "./modules/products.js";
import {buildProductsList} from "./modules/ui.js";

m1.products.forEach((val) =>{
   console.log(val);
})

console.log(buildProductsList(m1.products));

//import toto from "./lib.js"