<<<<<<< HEAD
test('nodeberia cambiar el contenido de la variable', ()=>{
	const str = 'inmutabilidad'

	expect(str.toUpperCase()).toBe('INMUTABILIDAD')
	expect(str).toBe('inmutabilidad')
})
=======
test('no deberia cambiar el contenido de la variable', () => {
  const str = 'inmutabilidad'

  expect(str.toUpperCase()).toBe('INMUTABILIDAD')
  expect(str).toBe('inmutabilidad')
})
>>>>>>> functional/master
