let display = (function displayProduct(reference, price, description){
    
    const structureProduit = `
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
}) ();

let _build = (function buildProductsList(products){

    products.forEach((val) =>{
        display(products[val].getReference(), products[val].getPrice(), products[val].getDescription());
    })

})();

export default{
    build: _build
}