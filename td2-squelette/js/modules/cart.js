//contenu du panier
let _panier = [];

class panier{
    constructor(ref, price, description){
        this.reference = ref;
        this.price = price;
        this.description = description
    }
}

let p = new panier('A111', 3, 'Pomme');
let p2 = new panier('A222', 4, 'Banane');
let p3 = new panier('A333', 5, 'Kiwi');

_panier.push(p);
_panier.push(p2);
_panier.push(p3);

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
    save();

}

export const genericCalc = function(calc, init){
	return _panier.reduce(calc,init);
}

export const emptyCart = function(){
    _panier = []
    save();
}


export const save = function() {
    let tabSer = JSON.stringify(_panier);
    localStorage.setItem("CléUnique4.0", tabSer);
    console.log("sauvegarde du tableau !");  
  }
  
export const load = function() {
    let nvTab = localStorage.getItem("CléUnique4.0");
    if (nvTab != null || nvTab != undefined) {
        let tabDeSer = JSON.parse(nvTab);
        this._panier = tabDeSer;

    }else {
        this.tab = [];
    }
}

//a supprimer
export default{
    panier : _panier
}