
var _ = require('underscore-node');
//first: Pass _.first() the array of products and display the returned object in a "featured" section of your site.
var products = [
  {
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
  },
  {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  },
  {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
  },
  {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
  },
  {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
  },
  {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
  }
]
var shoppingCart = [  {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
  },
  {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
  }]
// console.log(_.first(products));
// var first = function(arr) {
// 	return arr[0];
// }
// console.log(first(products));
// //last: Pass _.last() the array of products and display the returned object in a "clearance" section of your site.
// console.log(_.last(products));
// var last = function(arr){
// 	return arr[arr.length-1];
// }
// console.log(last(products));
// // filter: Use _.filter() to display only products that belong to the "books" category.
// console.log(_.filter(products, function(val){
// 	return val.category === "books"
// }))
// reject: Use _.reject() to display only products that are priced below $20.
// console.log(_.reject(products, function(val){
// 	return val.price > 20
// }))

// var below20 = function(element){
// 	return element.price <= 20;
// }
// var reject = function(arr, fn){
// 	var newarr = [];
// 	for (var i=0; i < arr.length; i++){
// 		if (fn(arr[i]) === true) {
// 			newarr.push(arr[i]);
// 		}
// 	}
// 	return newarr;
// }
// console.log(reject(products, below20));
// uniq: Use _.uniq() to ensure that their are no duplicate selling points in any products before displaying them.
console.log(_.uniq(products));
// map: Use _.map() to grab the picture_url of all products for sale, assign each to the src property of a new <img> tag and return that DOM element. Pass the result of calling _.map() directly into a $('#container').append() expression to create a photo montage.
console.log(_.map(products, function(val){
	return val.picture_url;
}));

// pluck: Use _.pluck() to quickly retrieve a list of the names of all products for sale to list them in an index
console.log(_.pluck(products, 'name'))
// reduce: Pass a shopping cart (array of objects) to _.reduce() and use it to add up the total price of the order.
var res = _.reduce(products, function(a, b){
	return a + b.price
}, 0);
console.log(res);
// contains: Determine if the order _.contains() a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.
console.log(_.contains(_.pluck(products, 'name'), "Twilight"));

// every: Use _.every() to determine if every item in the order has a price tag less than $10. If so, call the user a cheapskate!
console.log(_.every(shoppingCart, function(val){
	return val.price < 10;
}))
// some: Use _.some() to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!
console.log(_.some(products, function(val){
	return val.price > 100;
}))
// extend: Use _.extend() to merge two objects together. What would this be good for?
console.log(_.extend(products, shoppingCart));
