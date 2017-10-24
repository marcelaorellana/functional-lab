const parseItems = require('../parse-items')

test('devuelva un nuevo arreglo en vez de modificar el arreglo que recibe como argumento', () => {
	const items = ["1","3","5","7"]

	const backup = Object.assign([], items)

	parseItems(items)

	expect(items).toEqual(backup)
})


/*
//const logger = null;




//function logger(namespace){
  //  return function(...arg){
    //    return `${namespace} ${arg.join('')}`
 //   }
//}

//const info = logger("INFO:")

const logger = (namespace) => (...arg) => `{$namespace} $arg.join('')}`
module.exports = logger;

*/

/*
// Broken: mutates array as well as objects!!
const applyDiscount = (cart, discount) => {
    if(!cart.length){ return []}
    
    
    return [{
        price: cart[0].price * (1- discount)
    }].concat(applyDiscount(cart.slice(1), discount))
    

};

module.exports = applyDiscount;
*/

/*
function reduce(arr, fn, initial) {
  return (function innerReduce(idx, value){
      if(idx > arr.length -1){
          return value
      }
      
      return innerReduce(idx+1, fn(value, arr[idx], idx,arr))
  })(0,initial)
}

module.exports = reduce;
*/
/*function lala(){
	request("https://www.google.com", function(arr,res){
		if(arr){
			console.log(arr)
			return
		}
		console.log(res)
	})
}
lala()*/
/*
function lala(){
	return new Promise((resolve, reject)=>{
		request("https://www.google.com", function(arr,res){
		if(arr){
			console.log(arr)
			return
		}
		console.log(res)
		})
	})
	

	}
	lala().then((response)=>)*/