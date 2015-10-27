/* Exercise: Fibonacci

By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34

Write a function that accepts a number and returns the number at that position in the fibonnaci sequence. */

var fibonacci = function(num) {
	var list = [0, 1]
	while (list.length <= num) {
		new_num = list[list.length -1] + list[list.length - 2];
		list.push(new_num);
	}
	console.log(list);
	return list[num]
}
console.log(fibonacci(9));
console.log(fibonacci(31));