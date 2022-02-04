let _products = [];

class produit{
    constructor(ref, price, description){
        this.reference = ref;
        this.price = price;
        this.description = description
    }

    getReference(){
        return this.reference;
    }

    getPrice(){
        return this.price;
    }

    getDescription(){
        return this.description;
    }
}

let p = new produit('A123', 3, 'Pomme');
let p2 = new produit('A22', 4, 'Banane');
let p3 = new produit('A33', 5, 'Kiwi');

_products.push(p);
_products.push(p2);
_products.push(p3);


export default{
    products: _products
}
 
