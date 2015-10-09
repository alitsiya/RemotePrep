/* Exercise: n numbers are coming to a number party. 
Introduce them each to all the guests as they arrive. 
You should end up with output looking something like this one for n = 5:

  "welcome 1"
  "welcome 2, meet 1"
  "welcome 3, meet 1 and 2"
  "welcome 4, meet 1, 2 and 3"
  "welcome 5, meet 1, 2, 3 and 4" */
var num = 5;
var str = "welcome ";
var str1 = ", meet ";
var str2 = " and ";
var i = 1;
var result = '';
while (i <= num) {
	result = (str + i); 
	var j=1; //welcome 1
	while (j < i) {
		if (j===1){
				result += (str1 + j); //meet 1
		}
		else if (i-j == 1) {
			result += (str2) + j;
		}
		else {
			result += ", " + j;
		}
		j++;
	}
	console.log(result);
	i++;
	result = ""
}
