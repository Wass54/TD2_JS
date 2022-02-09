let _products = [];

class produit{
    constructor(ref, price, description){
        this.reference = ref;
        this.price = price;
        this.description = description
    }
}

let p = new produit('A111', 3, 'Pomme');
let p2 = new produit('A222', 4, 'Banane');
let p3 = new produit('A333', 5, 'Kiwi');

_products.push(p);
_products.push(p2);
_products.push(p3);

const search = function (keywords){ // 3 façons de le faire
    let tab = [];
    // _products.forEach(element => {
    //     if(element.reference == keywords || element.description == keywords){
    //         tab.push(element);
    //     }
    // });
    // return tab;


    // return _products = _products.filter(e => e.reference == keywords || e.description == keywords);
    tab = _products.filter(e => e.reference.includes(keywords) || e.description.includes(keywords));
    return tab;
}

export default{
    products: _products,
    search
}
 
