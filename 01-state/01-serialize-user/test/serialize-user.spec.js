const serializeUser = require('../serialize-user')

test('no mutar los objetos dentro del arreglo', () => {
	const grace = {
	    userId: 'xxx',
	    name: 'Grace Hopper',
	    country: 'us',
	    date: new Date()
	};

	const backup = Object.assign({}, grace)

	serializeUser(grace)

	expect(grace).toEqual(backup)
})