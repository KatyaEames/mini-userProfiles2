/*
1. Rules:
- the first parameter is an array
- the array will contain strings
- the second parameter is a function

2. Explore the Problem Space:
- loop through all names
- object as a lookup table
- dont need to return anything
- invoke the second parameter
- n^2 vs constant

3. Code we were given

4. Steps:
- create a function called uniq which takes in an array and a callback function
- create an empty object
- create new array
- loop over my array for the length of the array
	-look to see if the new individual item in the array (name), is a 
	key/value pair in my object. If it isnt, push the name to my new
	array and add it as a property/value on my object. If it is, ignore it
	-invoke the callback function passing it the new array
5. 
*/

var uniq = function(arr, cb) {
	var obj = {};
	var newArr = [];
	for(var i - 0; i < arr.length; i++) {
		if(!obj[arr[i]]) {
			newArr.push(arr[i]);
		}
	}
	cb(newArr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr) {
	console.log('The new names array with all the duplicate items removed is ' + uniqArr)
})

//

var sayName = function(name) {
	alert('Tyler');
}
var getName = function(cb) {
	var name = prompt('What is your name?');
	cb(name);
}
