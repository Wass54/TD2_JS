function displayProduct(reference, price, description){
    
    let structureProduit = `
    <div class="product">
					<div class="photo">
						<span class="mdi mdi-camera"></span>
						<a class="product-add2cart">
							<span class="mdi mdi-cart"></span>
						</a>
					</div>
					<div class="details">
						<div class="details-top">
							<strong class="bigger" data-type="ref">${reference}</strong>
							<strong class="bigger" data-type="price">${price}</strong>
						</div>
						<div class="details-description">
							${description}
						</div>
					</div>
				</div>
    `;
    return structureProduit;
};

export function buildProductsList(products){

    for(var i = 0; i <= products.length; i++){
        console.log(products[i].reference);
        displayProduct(products[i].reference, products[i].price, products[i].description);
    }
    /**
    products.forEach((val) =>{
        display(val.getReference(), val.getPrice(), val.getDescription());
    })*/

}
