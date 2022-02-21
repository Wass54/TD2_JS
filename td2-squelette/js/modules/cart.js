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

}

export const genericCalc = function(calc, init){
	return _panier.reduce(calc,init);
}

export const emptyCart = function(){
    _panier = []
}

//a supprimer
export default{
    panier : _panier
}