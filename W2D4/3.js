/*Exercise:

Which should we use above: car[prop] = 1992 or car.prop = 1992? Try both ways!
What happens when you ask for a property that is not registered to the object? i.e. to what 
value does the expression car['nothing_here'] resolve to? what about car.nothing_here?
Create your own dream_car object.
Use dot notation to add properties make, model, and color with values of type string, year 
with a value of type number, and registered with a value of type boolean. */
var car = {
  make: "Ford"
}

car["model"] = "Edge"
car["model"]
car.model

var prop = 'year'
car[prop] = 2011;
car.color = "grey";
car.registered = true;
console.log(car);