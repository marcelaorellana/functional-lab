'use strict';


// Broken: returns new array but mutates same object references.
const applyDiscount = (cart, discount) => {
	const result = Object.assign([], cart);

  if (!result.length) {
    return [];
  }

  const current = result.shift();
  current.price *= (1 - discount);

  return [current].concat(applyDiscount(result, discount));
};

module.exports = applyDiscount;
