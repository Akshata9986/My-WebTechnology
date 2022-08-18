// Nan-Not a number
// typeof(Nan)=Number
// FUNCTIONS
// 2 TYPES-1.NAMED FUNCTION
// 2.anonimous Function

//named function--with a name to a func
function add(a, b) {
  return a + b;
} //function declaration

console.log(add(2, 7)); //function call

// FUNCTION EXPRESSION
// Assigning a function  within a variable.
//anonimous function
let addAnoni = function (a) {
  return a * a;
}; //function expression

let x = addAnoni(3);
// console.log(addAnoni(3));
console.log(x);

// ARROW FUNCTION
// THERE IS NO FUNCTION KEYWORD AND FUNCTION NAME.
// Syntax
let Arrowfun = (arguments) => {
  //statements
};
Arrowfun();

// IMMEDIATELY INVOKED FUNC
// (function (arguments) {
//     // statements
// }
// )();

// code reusability

function addition(a, b) {
  let sum = a + b;
  console.log(`sum of ${a} and ${b} is`, sum);
}
addition(4, 5);
addition(3, 5);
addition(45, 5);

function findIsEligibleForVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let result = findIsEligibleForVote(21);

function printEligibleOrNot(arg) {
  if (arg === true) {
    console.log("eligible for voting");
  } else {
    console.log("not eligible");
  }
}
printEligibleOrNot(result);
//immediately invoked function
(function substraction(a, b) {
  let sum = a - b;
  console.log(sum);
})(5, 3);

//when you have a single line in your function
//body no need of curly braces
let product = (a) => a * a;
console.log(product(4));
//if you have only one argument no.
//no need of paranthesis and curly braces

let square = (b) => b * b;
square();
//if we dont have parameter then paranthesis is mandatory
let names = () => console.log("data is safe in arrow function");
names();
