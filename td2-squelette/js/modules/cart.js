//contenu du panier
let _panier = [];

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