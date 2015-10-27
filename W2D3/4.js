/* Exercise:

Write a function reverser which will take an array of values as an input and return a new array of the same values in reverse order.
Inside reverser instantiate a new array reversed_array, use a for loop to populate it, then return it from the function. */
var reverser = function(arr){
	var newarr = [];
	for (var i=0; i < arr.length; i++) {
		newarr.push(arr[arr.length - i - 1]);
	}
	return newarr;
}

console.log(reverser([1, 2, 3, 4, 5, 6, 7]))