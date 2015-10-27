/* Exercise: Remember while loops?

Write a function called factoral_of_n that takes a number 
and returns the factoral i.e. factoral_of_n(5) should return 120 (5x4x3x2x1).
Write a function called count_by_n that has parameters count_by and count_up_to, 
and console.log's the numbers up to count_up_to by intervals of count_by. */
var factoral_of_n = function(num) {
	var res = 1;
	var i = 1;
	while (i <= num) {
		res *= i;
		i++;
	}return res;
}
console.log(factoral_of_n(5));

var count_by_n = function(count_by, count_up_to) {
	var res = 1;  //Why we start from 1?
	while (res < count_up_to) {
		console.log(res);
		res += count_by;
	}
}
count_by_n(5, 50);