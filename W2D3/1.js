/* Exercise:

Use a while loop and jQuery to append each item in your recipe and your bucket list onto a web page.
Refactor your code such that the while loop lives inside a function called append_strings that takes an array as an input (argument)
Invoke append_strings twice, passing in recipe the first time and bucket_list the second time
Refactor append_strings such that it takes two arguments: an array of strings, and a string representing the CSS selector of the 
element into which the strings should be appended. (i.e. bucket_list may be appended into a #bucket_output div)*/

var bucket_list = [];
bucket_list[0] = "Be programmer";
bucket_list[1] = "Visit Alaska";
bucket_list.push("Be sucessful", "Plant a tree"); 
console.log(bucket_list);
bucket_list.unshift("Goal one"); 
bucket_list.unshift("Goal two"); 
console.log(bucket_list);
console.log(bucket_list.length);
var dying_wish = bucket_list.pop();
console.log(dying_wish);
var do_it_now = bucket_list.shift();
console.log(do_it_now);
console.log(bucket_list.length);