var arr = [1, 2, 3, 4, 5];
var obj = {
    name: 'Alya',
    age: 30,
    location: "San Francisco"
};
var print = function(val) {
    console.log(val);
};
print(arr[1]);
//write each function
var each = function(collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (var key in collection) {
            callback(collection[key])
        }
    }
};
each(arr, print);
each(obj, print);
//write filter function
var filter = function(collection, callback) {
    var result = [];
    each(collection, function(val) {
        if (callback(val)) {
            result.push(val)
        }
    });
    return result;

};
var res = filter(arr, function(val) {
    return val > 3
});
console.log(res);

//write each function, there was no such exersise
var every = function(collection, callback) {
	var result = true;
    each(collection, function(val) {
        if (callback(val) === false) {
        	result = false;
        }
    });
    return result;
}
var fn = function(val){
	return val === 8;
}
var out = every([8, 8, 8, 9, 8], fn) // false
console.log(out);
var out2 = every([8, 8, 8, 8, 8], fn) // true
console.log(out2);

//write reduce function
var reduce = function(collection, callback, initialVal){
	var currentVal = initialVal;
    each(collection, function(val){
    	currentVal = callback(currentVal,val)});
    return currentVal;
};

var redRes = reduce(arr, function(prevVal, currentVal){return prevVal + currentVal}, 5) //20
console.log(redRes);


//write every function using reduce
var every2 = function(collection, callback){
    return reduce(collection, function(a, b){
    	if (callback(b) === false){
    		a = false;
    	}
    	return a;
    }, true)
}

console.log(every2([1,1,1,13,1], function(val){return val === 1})); //false
console.log(every2([1,1,1,1,1], function(val){return val === 1})); //true

