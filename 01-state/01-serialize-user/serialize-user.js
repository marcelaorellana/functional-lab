
const serializeUser = user => {
	const result = Object.assign({}, user)
	result.name = (result.name.length > 10) ? `${result.name.slice(0, 7)}...` : result.name;
	result.date = result.date.toJSON();
	return JSON.stringify(result);
};

module.exports = serializeUser;