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