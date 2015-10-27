/* Write a function answer_collector that takes an array of functions as an input and runs each of them, in turn. Each time you run a function, collect its return value and add it to a results_array. Return the results array from answer_collector.

We can test answer_collector with this code: */


var answer_collector = function(arr) {
	var results_array = [];
	for (var i=0; i < arr.length; i++) {
		results_array.push(arr[i]());
	}
	return results_array
}

var fn1 = function () {
  return "this should be the first value in results array"
}

console.log(answer_collector([fn1, function(){ return "this should be the second value in results array" }]));