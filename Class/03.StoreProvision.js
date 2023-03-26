function storeprovision(arr1, arr2) {


	let storeproduct = [];
	let product = [];

	let flag = false;
	let storeobjects = {
		'name': '',
		'quantity': 0
	}
	let products = {
		'name': '',
		'quantity': 0
	}
	createObjects(arr1, storeobjects, flag, storeproduct);
	createObjects(arr2, products, flag, product);

	for (let i = 0; i < product.length; i++) {

		if(storeproduct.find(x=>x.name===product[i].name)){

			let obj=storeproduct.find(x=>x.name===product[i].name);

			let a=Number(obj.quantity);
			let b=Number(product[i].quantity);

			obj.quantity=(a+b).toString();

		}else{
			storeproduct.push(product[i])
		}
	}

	for (let i = 0; i < storeproduct.length; i++) {

		console.log(`${storeproduct[i].name} -> ${storeproduct[i].quantity}`)

	}

	function createObjects(arr1, storeobjects, flag, storeproduct) {
		for (let i = 0; i < arr1.length; i++) {
			if (i % 2 === 0) {
				storeobjects.name = arr1[i];
			}
			if (i % 2 !== 0) {
				storeobjects.quantity = arr1[i];
				flag = true;
			}

			if (flag) {
				storeproduct.push(storeobjects)
				flag = false;
				storeobjects = {
					'name': '',
					'quantity': 0
				}
			}
		}
	}

}

storeprovision([
		'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
	],
	[
		'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
	])