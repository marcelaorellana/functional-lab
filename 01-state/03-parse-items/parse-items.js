const parseItems = (items) => {
	const backup = Object.assign([], items)
	for (let i = 0; i < backup.length; i++) {
		backup[i] = parseInt(backup[i]);
	}
	return backup.sort();
};

module.exports = parseItems;
