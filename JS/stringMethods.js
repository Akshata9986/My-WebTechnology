// stringMethods

var str = "test yantra";
str.toUpperCase();
console.log(str);

var str = "test yantra";
var upper = str.toUpperCase();
console.log(upper);

var greet = "Good Morning";
var greet = greet.toLowerCase();
console.log(greet);
console.log(greet.charAt(9)); //this will return the character of that particular index

console.log(greet.indexOf("o"));

var wishing = "good afternoon";
console.log(wishing.includes("noon"));

var wishing = "good afternoon";
console.log(wishing.includes("noons"));

var wishing = "good afternoon";
console.log(wishing.includes("Noon"));

// replace
console.log(wishing.replace("afternoon", "morning"));
console.log(wishing); //it will not change because it is immutable

// sub str
var data = "welcome to javascript world";
const substr = data.substr(9, 5);
console.log(substr); // o java

// sub string

var substring = data.substring(9, 4);
console.log(substring); //it gives output  value from index 9 to 4

var email = "            akshata@gmail.com";
console.log(email);
console.log(email.trim());
