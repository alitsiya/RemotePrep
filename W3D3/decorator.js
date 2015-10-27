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
/* Exercise

Create a fetch_adder function that adds fetching functionality to any dog that is passed in as an argument.
Create a nap_adder function that adds napping functionality to any cat that is passed in as an argument. */
var fetch_adder = function(obj){
	obj.alive = true;
}
var nap_adder = function(obj){
	obj.napping = false;
}
fetch_adder(dog);
console.log(dog.alive);
nap_adder(cat1);
console.log(cat1.napping);