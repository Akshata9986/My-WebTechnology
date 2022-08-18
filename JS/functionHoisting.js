console.log("outside the function a", a); //undefined
var a = 20;
var b = 30; //global variable
console.log("out side the function b", b); //30

//variable hoisting inside the function
function test() {
  console.log("b inside the function", b); //undefined
  var b = 10; //inside the function and local variable has more preference than global.
  console.log("a inside the function", a); //20
  console.log(b);
}
test();

//hoisting is a technique which moves variable
// and function declaration to the top of their scope before
//the code execution begins

var name = "megha";

add(2, 4);
function add(a, b) {
  console.log(a + b);
}

//greet();
var greet = function () {
  console.log("good morning");
};
greet();
