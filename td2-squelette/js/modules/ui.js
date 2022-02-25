import cart from "./cart.js";
import p, {addToCart} from "./cart.js";
import {getPanier} from "./cart.js";
import {genericCalc} from "./cart.js";

function displayProduct(product){
	let structureProduit = `
					<div class="photo">

                        <img src="${product.url}"> 
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
		displayCart();
		//console.log(p.panier);
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


//prend en charge l'affichage du panier
export const displayCart = function(){

	let panier = getPanier();

	document.getElementById("cart-content").innerHTML = panier 
	.map(productInCart => {
		return `<tr>
			<td data-type="ref">${productInCart.produit.reference}</td>
			<td data-type="qte">x${productInCart.qty}</td>
			<td data-type="amount">${productInCart.produit.price} €</td>
		</tr>`
	})
	.reduce((productTable, productRow)=>productTable+productRow, ' ');

	let cartProdNumber = document.getElementById("total-products");
	let cartTotal = document.getElementById("cart-total");

	cartProdNumber.innerText = 'x' + genericCalc((sum, produit) => sum+produit.qty, 0);
	cartTotal.innerText = genericCalc((total,produit) => total +produit.produit.price * produit.qty, 0) + '€';

}
