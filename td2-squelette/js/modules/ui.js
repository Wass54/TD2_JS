import cart from "./cart.js";
import p, {addToCart} from "./cart.js";
import {genericCalc} from "./cart.js";

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

//prend en charge l'affichage du panier
//j'en étais à là (tests)

const displayCart = function(){

	let panier = p.panier;
	
	document.getElementById("cart-content").innerHTML = panier 
	.map(productInCart => {
		return `<tr>
			<td data-type="ref">${productInCart.produit.reference}</td>
			<td data-type="qte">${productInCart.qty}</td>
			<td data-type="amount">${productInCart.produit.price}</td>
		</tr>`
	})
	.reduce((productTable, productRow)=>productTable+productRow, ' ');

	let cartProdNumber = document.getElementById("total-products");
	let cartTotal = document.getElementById("cart-total");

	cartProdNumber.innerText = genericCalc((sum, produit) => sum+produit.qty, 0);
	cartTotal.innerText = genericCalc((total,produit) => total+produit.produit.price * produit.qty, 0);

}

/** 
const displayCart = function(){
    let panier = p.panier;
    let somme;

    for(var i = 0; i < panier.length ; i++){
        somme += panier[i].qty;    
    }
	let element = document.createElement("div");
	element.classList.add('product');
	element.innerHTML = structureProduit;

	//Récupération de la référence à la table
	var refTable = document.getElementById(tableID);
	
	//Inserer la ligne dans la table
	var nouvelleLigne = refTable.insertRow(); 

    let structurePanier = `
        <div id="cart-header">
            <h2>Mon panier (<span id="total-products">${somme}</span>)</h2>
            <a id="empty-cart">Vider le panier</a>
        </div>
            <table id="cart-content">
                <tr> 
                    <td data-type="ref">${panier[0].produit.reference}</td>
                    <td data-type="qte">${panier[0].qty}</td>
                    <td data-type="amount">${panier[0].produit.price}</td>
                </tr>
                <tr>
                    <td data-type="ref">#REF4</td>
                    <td data-type="qte">x1</td>
                    <td data-type="amount">180,12€</td>
                </tr>
            </table>
        <div id="cart-footer">
            <strong class="bigger">Total :&nbsp;</strong>
            <span  class="bigger" id="cart-total">438,62€</span>
        </div>
    `;


}*/


