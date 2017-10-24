const lowercaser = require('../lowercaser')

<<<<<<< HEAD
test('lowercaser deberia retornar un strig en lowercase', () =>{
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'

	expect(lowercaser(actual)).toBe(expected)

})

test(
	'deberia fallar cuando ingresa un numero',
	() => {
		const actual = 1
		expect(()=> {
			lowercaser(actual)
		}).toThrow()
	}
)
=======
test(
  'lowercaser deberia retornar un string en lowercase',
  () => {
    const actual = 'LOREM IPSUM'
    const expected = 'lorem ipsum'

    expect(lowercaser(actual)).toBe(expected)
  })

test(
 'debería fallar cuando se ingresa un numero',
  () => {
    const actual = 1

    expect(() => {
      lowercaser(actual)
    }).toThrow()
  }
)
>>>>>>> functional/master
