/* Exercise:

Create a variable called my_dream_life and assign to it an empty object
Create a variable called property_key and assign to it the string value "job"
Use the property_key variable, not the literal string "job" to add a job property to your dream life object.
Create a variable another_property_key and give it a value "salary".
Use another_property_key, not the literal string "salary", to quantify the value of human life.
What does my_dream_life[property_key] return?
What does my_dream_life["job"] return?
Assign a string "car" to the variable next_property
Use the variable next_property to add your dream car to your dream life object.
What does my_dream_life[next_property] return?
What does my_dream_life["car"] return?
Assign the my_dream_life three more properties using the property_key variable rather than literal strings and access them each using variables as well */
var my_dream_life = {};
var property_key = "job";
my_dream_life[property_key] = "programmer";
var another_property_key = "salary";
my_dream_life[another_property_key] = "$0";
var next_property = "car";
my_dream_life[next_property] = "beatle";
console.log(my_dream_life)




