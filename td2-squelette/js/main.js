import m1 from "./modules/products.js";
import {buildProductsList} from "./modules/ui.js";
import * as app from "./modules/app.js";

m1.products.forEach((val) =>{
   console.log(val);
})

buildProductsList(m1.products);

//import toto from "./lib.js"