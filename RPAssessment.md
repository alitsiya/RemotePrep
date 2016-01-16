>> Instructions
>> Use interview conditions. Do not look anything up, refer to old code, or check anything in a console.
>> Note the time at which you begin and end. Assume each problem is a separate program.

#Make an array containing the string "remote prep" and the number of your class. 
#Then write an operation that will add your full name to the beginning of the array. Then write an operation that will add your email address to the end.


#What will be the values of x and y?
var a = 5;
var x = a;
a++; 

var b = [5];
var y = b;//y=[5]
b.push(6);
//x=6, y=[5, 6]

#What will each of these lines output?
var a = 1;

1 == "1"; //true
1 === "1"; //false
1 == a;  //true
1 === a;  //true
a == "a"; //false
a === "a"; ///false

#Make a function inside an array and invoke it.
var arr = [1, function(){console.log('Hi')}, 'a']
arr[1]();

#First, write a loop that will cycle through an object called "myObject" and console log 
#each of its values. Then, explain why you did or did not use a "var" keyword in your answer.
    myObject = {name: "Alya", age: 30};
		for (var key in myObject){
		console.log(myObject[key]);
	};
	console.log(Object.keys(myObject));

#What will this return?

var fn = function(num){
  return num > 5
};

fn(10);
	//true

#What will this return?

var x = {name: "Hank"}
typeof x
///object

#What will this return?

var x = ["Hank"]
typeof x
//object

#What will this return?

var x = [{name: "Hank"}]
typeof x
//object
#What will this return?

var x = {one: ["two", {three: "four"}]}
typeof x.one[1];
//object
#What is x?

var x = 5 || 7
//5
#Fizzbuzz. Console log the numbers from 1 to 100.
#Now for numbers that are multiples of three print "Fizz" instead of that number
#For the multiples of five print "Buzz" instead of that number
#For numbers which are multiples of both three and five print "FizzBuzz"
	 for (var i=1; i <=100; i++) {
   	 	if (i%3===0 && i%5===0) {console.log("FizzBuzz")}
   		else if (i%3 ===0) {console.log("Fizz");}
   		else if (i%5 ===0) {console.log("Buzz");}
   		else {console.log(i);}
	}

#What will reversed actually equal as is? How would you fix reverseString?
var reverseString = function(inputString) {
  for(var i = 0; i < inputString.length; i++){
    return inputString[i]; ////it would return inputString[0], 'a'
  }
};
var reversed = reverseString('abcdef');
		var str = '';
		for(var i = inputString.length-1; i >= 0; i--){
  		str+= inputString[i]; 
  		}
	return str

#What will x equal?
var fn = function(array){
  array.forEach(function(val){
    return val * 5
  })
}
var x = fn([1,2,3,4,5]);
//x === [5, 10, 15, 20, 25]

#What will this output?
for (var i = 0; i < 2; i++){
  for (var j = 0; j < 2; j++){
    console.log(i);
  }
};
0
0
1
1

#Write a function that takes a positive integer and outputs a random integer between 0 
#and up to but not including the parameter.
var rand = function(num){
   return Math.floor(Math.random()*num)
}

#Write a function "funcRunner" that just takes a function as a parameter and invokes it. 
#Then, invoke "funcRunner" in such a way that the word "hello" will be logged to the console.
	var funcRunner = function(fn){
		return fn()
	}
	var fn = function(){return "hello"}
	console.log(funcRunner(fn));

#CSS stands for "Cascading Style Sheet," but why are they cascading?
//because there is hierarchy and inheritance, for example style for body has lower priority than for div-tag

#Write a function that takes a number n and returns a square grid of X's of n width. 
#You may use an array or console log strings.
//var squareGrid = function(n){
var arrStr = [];
var arr = [];
    for (var i=0; i<n; i++){
    arrStr.push('x');
    }
    for (var j=0; j<n; j++){
    arr.push(arrStr);
    }
    return arr;
}
console.log(squareGrid(5));

#Log to the console a single string containing both "double quotes" and 'single quotes.'
console.log("This is the string with 'single' quotes" + 'and this is with "double"')

#What does 'git push remote origin' do?
It pushes changes from local git to remote git that has relations with local

#What would you write to travel up one directory in a relative path? How about two?
// cd ..
// cd ../..

#What will this output and why?
var x = [1,2,3,4,5];
var y = [1,2,3,4];
y.push(5);
x === y
//false, because they are nor related but equal in elements, if we would do x = y, x === y would be true

#Write a function that takes a string and returns true or false if it contains two of the 
#same characters back-to-back. Example:
	var same = function(str){
    	for (var i=1; i < str.length; i++) {
        	if (str[i] === str[i-1]) {return true};
    	}
    	return false;
	}
console.log(same('dog')); //false
console.log(same('doggy')); //true

#What will this output?
var x = [1,2,3,4,5]
x.indexOf(1) + x.indexOf(2); //0 + 1 = 1


#What two lines will this display in the console?
var fn = function(val, callback){
  console.log(callback(val));
}
console.log(fn(100, function(x){return x + 1}))
//undefined
//undefined

#Write a decorator function that takes an object and gives it 2 new properties with 
countries for keys and capitals for values.
obj = {name: "Alya"}

var decorator = function(obj) {
    obj.USA = "Washington";
    obj.Russia = "Moscow";
    return obj
    
}
console.log(decorator(obj))


#Why would you ever write the following?
var context = this;
//it woud say that 'context' is an object that function takes

#Get and Post: What's the difference?
get receives data from server, post can submit changes to server

#Explain what we mean by "asynchronous" when talking about server calls.
"asynchronous" means that there is no order in which functions execute

#What will you see on the console and why?
console.log(fn);
console.log(fn());
var fn = function(){
  return "hello world"
}
//undefined
//error

#Write a function "mirrorCheck" that takes an object and returns true if any of its keys are identical to their value. Example:
var mirrorCheck = function(obj){
    for (var key in obj){
       if (key === obj[key]){
          return true;
        }
    }
    return false;
}

var obj = {
  color: "blue",
  stuff: "stuff"
}
console.log(mirrorCheck(obj)); // true


#Write 'indexOf' from scratch. Example:
var arr = [1,2,3,4,5];


var indexOf = function(arr, num) {
    for (var i=0; i<arr.length; i++){
        if (arr[i] === num) {
            return i;
        }
    }
    return -1
}
console.log(indexOf(arr, 1))  // 0
console.log(indexOf(arr, 6)) // -1


#Write 'contains' from scratch using your indexOf function. Example:
var arr = [1,2,3,4,5];

var contains = function(arr, num){
    if (arr.indexOf(num) > -1) {return true;}
    else {return false}
}
console.log(contains(arr, 1)) // true
console.log(contains(arr, 6))// false




*Nightmare Mode*
**Note that if you don't get to these today, you might use them for practice interview questions with your classmates.**
#Write a function "Counter" that returns a function whereby on each call, the output 
begins at 1 and each subsequent call is one more than the previous. 
var Counter = function(){
    var obj = {counter: 1};
    return function(){

    return obj.counter++}
}
var myCounter = Counter()
console.log(myCounter())   // 1
console.log(myCounter())   // 2
var myCounter2 = Counter()
console.log(myCounter2())  // 1
console.log(myCounter())   // 3

#Remember the module pattern? Create a shopping basket that has an "itemCount" method and an 
"addItem" method, but does not allow access to the basket itself.
var basketModule = function() {
    basket: [],
    addItem: function(item){
        return this.basket.push(item)
    },
    itemCount: function() {return this.basket.length}
}

basketModule.addItem("milk");
basketModule.addItem("bread");
console.log(basketModule.itemCount())  // 2
console.log(basketModule.basket())     // TypeError: basketModule.basket is not a function

#From Eloquent Javascript, "Use the reduce method in combination with the concat method to
 "flatten" an array of arrays into a single array that has all the elements of the input arrays."
var  arr = [[1,2], [3,4], [5,6]]
arr.reduce(function(a, b){
    return a.concat(b)
}, [])

#Write a random pair function that takes the members of our class and outputs an array of 
tuples of random pairings. (A tuple is an array of two elements.) Be sure everyone is accounted 
for and no one is repeated. For odd numbers, make the last group a group of three.
var class = ["James", "Huy", "Bob", "Thomas", "Emmanuel", "Justin", "Matthew", "Christina", "Alitsiya", "Dave", "Alexander", "Daniel", "David", "Mitchell", "Janica"]

    var randomPair = function(arr){
      var pair = [];
      while (arr.length > (arr.length%2 === 0)? 2: 3) {
          var a = arr.splice(arr.indexOf(Math.floor(Math.random() * arr.length)), 1);
          var a.push(arr.splice(arr.indexOf(Math.floor(Math.random() * arr.length)), 1));
          pair.push(a);
        
      }
      pair.push(arr);
    }
console.log(randomPair(class))

// [["Dave", "Mitchell"], ["Thomas", "Alitsiya"], ["James", "Daniel"], ["Huy", "Bob"], ["Janica", "Alexander"], ["David", "Christina"], ["Matthew", "Emmanuel", "Justin"]

#deepCompare: Write a function that will compare two objects and determine if all of their values are the same.
var a = {name: "Hank", species: "Dog"}
var b = {species: "Dog", name: "Hank"}

    var deepCompare = function(a, b){
        if (a.length === b.length) {
            for (key in a) {
                if (a.key
            }
        }
        else {return false};
    }
console.log(deepCompare(a, b))  // true

#RECURRING NIGHTMARE MODE: Make it so that your deep compare function will work with nested objects and arrays.
var a = {name: "Hank", species: "Dog", owner: {name: "Jonathan", instructor: true}}
var b = {species: "Dog", name: "Hank", owner: {name: "Jonathan", instructor: true}}
console.log(deepCompare(a, b))  // true


