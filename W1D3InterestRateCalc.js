
       var start_balance = 20;
       var target_balance = 110;
       var interest_rate = 2;
       var current_balance = start_balance;
       var n=0;
        while (current_balance < target_balance) {
	        current_balance += current_balance * interest_rate/100;
	    n++;
}
console.log(n)
