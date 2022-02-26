import {displayCart} from "./ui.js";

//contenu du panier
let _panier = [];

class panier{
    constructor(ref, price, description){
        this.reference = ref;
        this.price = price;
        this.description = description
    }
}

class objet{
    constructor(produit, quantite){
        this.produit = produit;
        this.qty = quantite;
    }
}

//ajoute un produit dans le panier
export const addToCart = function(produit){

    let tmp = new objet(produit, 1);
    let element = _panier.find(e => e.produit === produit);
    if(element){
        element.qty++;
    }else{
        _panier.push(tmp);
    }
    
    save();

}

export const genericCalc = function(calc, init){
	return _panier.reduce(calc,init);
}

//permet de vider le panier
export const emptyCart = function(){
    if (_panier.length === 0) { 
        document.getElementById("cart-content").innerHTML = 'Votre panier est déjà vide!';
    }else{
        document.getElementById("cart-content").innerHTML = 'Vous avez vidé votre panier!';
    }
    _panier = [];
    document.getElementById("total-products").innerHTML = 'x0';
    document.getElementById("cart-total").innerHTML = '0€';
    localStorage.clear()

    save();
}


export const save = function() {
    let tabSer = JSON.stringify(_panier);
    localStorage.setItem("CléUnique4.0", tabSer);
  }
  
export const load = function() {
    let nvTab = localStorage.getItem("CléUnique4.0");
    if (nvTab != null || nvTab != undefined) {
        let tabDeSer = JSON.parse(nvTab);
        _panier = tabDeSer;
        displayCart();

    }else {
        _panier = [];
    }
}

export const getPanier = function(){

    return _panier;

}

export default{
    panier : _panier
}