import {addToCart} from "./cart.js";

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
	let clCart = structureProduit.getElementsByClassName("product-add2cart");
		clCart.addEventListener("click", function(e){
			addToCart(product);
		});

	return structureProduit;
	*/
};

export const buildProductsList =  function(products){

	for(var i = 0; i < products.length; i++){
		let id = document.getElementById("product-list");
        let structureProduit = displayProduct(products[i]);
		id.innerHTML += structureProduit;
    }


	/** 
    for(var i = 0; i < products.length; i++){
        displayProduct(products[i].reference, products[i].price, products[i].description);
    }
	*/

}
