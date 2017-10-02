const parseItems = require('../parse-items')

test('devuelva un nuevo arreglo en vez de modificar el arreglo que recibe como argumento', () => {
	const items = ["1","3","5","7"]

	const backup = Object.assign([], items)

	parseItems(items)

	expect(items).toEqual(backup)
})