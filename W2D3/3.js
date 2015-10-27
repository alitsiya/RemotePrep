/* Exercise:

use .split(' ') on scrambled_poem and save the result as an array scrambled_array
Create a new array unscrambled_array
While the length of scrambled_array is greater than 0, remove the FIRST and LAST value and store add them to unscrambled_array.
Turn the values in unscrambled_poem into a string by using the array's native .join(' ') method. */

var str = "one two three"
var arr = str.split(' ')
var new_str = arr.join(' and a ')

// now our turn...
var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are"

var scrambled_array = scrambled_poem.split(' ');
console.log(scrambled_array);

var unscrambled_array = [];
unscrambled_array.push(scrambled_array.shift());
unscrambled_array.push(scrambled_array.pop());
console.log(unscrambled_array);
console.log(unscrambled_array.join(' '))
