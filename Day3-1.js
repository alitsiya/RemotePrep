var n = 1;
while (n <=100) {
	if (n%3 === 0 && n%5 === 0) {
		console.log("FizzBuzz");
	}
	else {
	    if (n%3 === 0) {
		  console.log("Fizz");
	    }
	    if (n%5 === 0) {
		  console.log("Buzz");
	    }
    }
	console.log(n);
	n++;
}