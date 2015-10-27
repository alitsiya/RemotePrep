var warrior_factory = function(name, weapon) {
	var warrior = {};
	warrior.name = name;
	warrior.weapon = weapon;
	warrior.attack = function(){
		console.log(warrior.name + " attacks with " + warrior.weapon)
	}
	return warrior
}
console.log(warrior_factory("Kill", "gun"));