let _products = [];

class produit{
    constructor(ref, price, description, url){
        this.reference = ref;
        this.price = price;
        this.description = description;
        this.url = url;
    }
}

let p = new produit('A111', 3, 'Pomme', './img/3.jpg');
let p2 = new produit('A222', 4, 'Banane', './img/2.jpg');
let p3 = new produit('A333', 5, 'Kiwi', './img/1.jpg');

_products.push(p);
_products.push(p2);
_products.push(p3);

export const search = function (keywords){
    let tab = [];
    tab = _products.filter(e => e.reference.includes(keywords) || e.description.includes(keywords));
    return tab;
}

export default{
    products: _products,
}
 
