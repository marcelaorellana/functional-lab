const applyDiscount = require('../apply-discount')

test('no ignorar argumento de descuento', () =>{
	const cart = [
		{ price: 1 },
		{ price: 2 },
		{ price: 3 }
	];
	const discount = .2;
	const expected = [
		{ price: 1*(1-discount) },
		{ price: 2*(1-discount) },
		{ price: 3*(1-discount) }
	];

	expect(applyDiscount(cart,discount)).toEqual(expected)

})

test('no mutar los objetos dentro del arreglo', () => {
	const cart = [
		{ price: 1 },
		{ price: 2 },
		{ price: 3 }
	];
	const discoun = .2;
	const backup = Object.assign([], cart)

	applyDiscount(cart,discoun)

	expect(cart).toEqual(backup)
})