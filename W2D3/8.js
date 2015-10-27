/* Exercise: Shuffler Create a function shuffler that takes an array as input and returns a new array 
of the same elements in a random order. Is your shuffle perfectly mathematically random or only 
pseudo-random? How computationally efficient is it- i.e. how many lines of code need to be run? */

var array = [1, 2, 3, 4, 5, 6, 7 , 8, 9]
var shuffler = function(array) {
	var shuffled_array = [];
	while (array.length > 0) {
		var random = Math.floor(Math.random() * array.length);
		var variable = array.splice(random, 1);
		shuffled_array.push(variable);
	}
	return shuffled_array;
}
console.log(shuffler(array));