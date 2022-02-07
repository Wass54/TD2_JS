function displayProduct(reference, price, description){
    
    let id = document.getElementById("product-list");

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
    id.innerHTML += structureProduit;

};

export const buildProductsList =  function(products){

    for(var i = 0; i < products.length; i++){
        displayProduct(products[i].reference, products[i].price, products[i].description);
    }

    /**
    products.forEach((val) =>{
        display(val.getReference(), val.getPrice(), val.getDescription());
    })*/

}
