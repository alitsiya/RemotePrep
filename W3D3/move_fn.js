/* Exercise:

Create a new object dog. Give it a name and location.
Give the dog a party method.
Reference the dog's name inside the party method (i.e. when you invoke dog.party it should say "rufus dances wildly")
Give the dog a favorite_food property (a string, 'kibble') and an eat method.
Reference the favorite_food inside the eat method.
Give the dog a hungry property, a boolean set to true
When your dog eats, set its hungry property to false, referencing it via this
Add a go_to_park method which references the dog's location and when invoked changes the hungry property back to true. 
Exercise: Refactor your dog object so that its methods reference free-standing functions eat_fn, party_fn, and go_to_park_fn.

Create a second dog and have it reference the same free-standing functions as the first dog.
Experiment with calling the functions on each dog in turn.
Rewrite the move_fn to change a car's position based on its speed property.
Appreciate that we only have to change one function instead of two.
Create two cat objects that have their own names, but share an free-standing function with their meow method.
When meow is invoked it should log 'charlie meowed' or 'mr. snuggles meowed' per their correct names.
*/
var eat_fn = function(){
	this.hungry = false;
	return this.favorite_food;
	}

var party_fn = function(){
	return dog.name + " dances wildly"
}
var go_to_park_fn = function(){
	this.hungry = true;
		return this.location
}
var dog = {
	name: "rufus",
	location: "San Francisco",
	party: party_fn,
	favorite_food: "kibble",
	eat: eat_fn,
	hungry: true,
	go_to_park: go_to_park_fn
}
var dog2 = {
	name: "Wolf",
	location: "Seattle",
	party: party_fn,
	favorite_food: "meat",
	eat: eat_fn,
	hungry: false,
	go_to_park: go_to_park_fn
}

var meow_fn = function(){
	console.log(this.name + " meows")
}
var cat1 = {
	name: "Fluffy",
	meow: meow_fn
}
var cat2 = {
	name: "Kitty",
	meow: meow_fn
}
console.log(dog.hungry);
console.log(dog.eat());
console.log(dog.hungry);

console.log(dog.go_to_park());
console.log(dog.hungry);