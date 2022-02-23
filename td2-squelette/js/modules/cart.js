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

//paramètre un produit (reference,price,description)
export const addToCart = function(produit){

    let tmp = new objet(produit, 1);
    let element = _panier.find(e => e.produit === produit);
    if(element){
        element.qty++;
    }else{
        _panier.push(tmp);
    }
    
    //save();

}

export const genericCalc = function(calc, init){
	return _panier.reduce(calc,init);
}

export const emptyCart = function(){
    _panier = [];
    //window.location.href = "index.html";
    
    let cartProdNumber = document.getElementById("total-products");
	let cartTotal = document.getElementById("cart-total");

    cartProdNumber.innerText = 0
	cartTotal.innerText = 0 + '€';

    let cart = document.getElementById("cart-content");
    let fils = document.querySelector('tr');
    cart.appendChild(fils);
    cart.removeChild(fils);
    
    
    //save();
}


export const save = function() {
    let tabSer = JSON.stringify(_panier);
    localStorage.setItem("CléUnique4.0", tabSer);
    console.log("sauvegarde du tableau !");  
  }
  
  /** 
export const load = function() {
    let nvTab = localStorage.getItem("CléUnique4.0");
    if (nvTab != null || nvTab != undefined) {
        let tabDeSer = JSON.parse(nvTab);
        _panier = tabDeSer;

    }else {
        tab = [];
    }
}*/

export default{
    panier : _panier
}