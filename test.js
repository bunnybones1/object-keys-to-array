var extractKeys = require('./');

var obj = {
	test: {},
	thing: 'thing',	
	foo: 'bar'
}

console.log(obj);
console.log(extractKeys(obj));