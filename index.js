function extractKeys(obj) {
	var arr = [];
	for(var key in obj) {
		arr.push(key);
	}
	return arr;
}

module.exports = extractKeys;