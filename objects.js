//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = "Porter Wilcox";
me.age = 23;
me["hair color"] = "BROWN"

// console.log(me);

//2. Iterate over the object to console.log the property or key names. 

// console.log(Object.getOwnPropertyNames(me));

// for (let prop in me) {
// 	console.log(`My ${prop} is ${me[prop]}`);
// }