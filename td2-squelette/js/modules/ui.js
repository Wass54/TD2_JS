import {addToCart} from "./cart.js";

function displayProduct(product){
	let structureProduit = `
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
    `	;

	let element = document.createElement("div");
	element.classList.add('product');
	element.innerHTML = structureProduit;
	element.querySelector(".product-add2cart").addEventListener('click', function(e){
		addToCart(product);
	});
	return element;

}


export const buildProductsList = function(products){



	let query = document.getElementById("product-list");
	query.innerHTML = "";
	for(var i = 0; i < products.length; i++){
        query.appendChild(displayProduct(products[i]));
	}
}
