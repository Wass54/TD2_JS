import {addToCart} from "./cart.js";
import p from "./cart.js"; //a supprimer

function displayProduct(product){
    
	let structureProduit = `
    	<div class="product">
					<div class="photo">
						<span class="mdi mdi-camera"></span>
						<a class="product-add2cart">
							<span class="mdi mdi-cart"></span>
						</a>
					</div>
					<div class="details">
						<div class="details-top">
							<strong class="bigger" data-type="ref">${product.reference}</strong>
							<strong class="bigger" data-type="price">${product.price}</strong>
						</div>
						<div class="details-description">
							${product.description}
						</div>
					</div>
				</div>
    `	;
	
	/** 
	let clCart = document.getElementsByClassName("product-add2cart");
	for(var i = 0; i < clCart.length; i++){
		clCart[i].addEventListener('click', function(e){
			addToCart(product);
			console.log('test');
		});
	}*/

	return structureProduit;
};

export const buildProductsList = function(products){

	let id = document.getElementById("product-list");

	for(var i = 0; i < products.length; i++){
        let structureProduit = displayProduct(products[i]);
		console.log(products[i]);
		id.innerHTML += structureProduit;
		let clCart = document.getElementsByClassName("product-add2cart");
		//for(var j = 0; j < clCart.length; j++){
		clCart[i].addEventListener('click', function(e){
			addToCart(products[i]);
				//console.log(products[0]);
			console.log('test');
				//console.log(p.panier[1]);
				//console.log(p.panier[2]);
		});
		//}
			
    }


	/** 
    for(var i = 0; i < products.length; i++){
        displayProduct(products[i].reference, products[i].price, products[i].description);
    }
	*/

}
