function Dog(name, breed, sex, age) {
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.age = age;
}

console.log('Can you make newly created dogs bark?');
var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

// TODO: solve the barking problem!
var barkconstructor = function(obj) {
    obj.bark = function() {
        return "Woof!"
    }
}
barkconstructor(apollo)
barkconstructor(zeus)

console.log(apollo.bark());
console.log(zeus.bark());