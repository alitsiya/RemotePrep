var arr = [1, "banana", "Hello", true]
var searchhello = function(arr) {
    var marker = false;
    arr.forEach(function(a){
        if (a === 'hello') {
            marker = true;
        }
    });
    return marker;
}
console.log(searchhello(arr));
/*Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.*/
var arr2 = [1, 2, 4, 6, 3, 1, 7, 9, 5, 4, 3, 2, 5, 4, 2, 6]
var countTarget = function(arr, target) {
    var count = 0;
    arr.forEach(function(a){
        if (a === target) {
            count++;
        }
    })
    return count;
}
console.log(countTarget(arr2, 6))

/* Write a function that takes an array and returns a new array containing only the values at odd indexes in that array. */
var printOdd = function(arr) {
    var newarr = [];
    for (var i=0; i< arr.length; i+=2) {
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(printOdd(arr2));
/*Write a function called sum_array that takes an array of numbers and returns the sum of all of those numbers added together.*/
var sum_array = function(arr){
    arr.forEach(function(a) {
        sum +=a;
    })
}