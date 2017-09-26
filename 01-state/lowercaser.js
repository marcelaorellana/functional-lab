//function lowercaser(input){
//	return input.toLowerCase()
//}

const lowercaser = (input) => {
	if(typeof input != 'string'){
		throw ('input is not a valid strig')
	}

	return input.toLowerCase()
}

module.exports = lowercaser

