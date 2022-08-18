let myArray = [20, 24, 30, 2, 33, 455, 43];
//push method
//push method add an element at the end
//it will take a value
//it will return a new array if we pushed any value
//it will change the length of an array
myArray.push(50); //one element
console.log(myArray);
myArray.push(60, 70, 80, 90);
console.log(myArray);

console.log(myArray.push()); //return length of an array.

//pop method don't take anything as argument
//pop method will remove the last element of a array
//pop method will return the removed items

console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop());

//UNSHIFT
//unshift is used to add an element to the beginning of an array
//it will take an element to add to the array as an argument
//unshift method will return the length of an array
let fruits = ["apple", "grapes", "banana", "mango"];
fruits.unshift("lemon");
console.log(fruits);

//shift is used to remove an element at the beginning
//it will not take any arguments
//shift will return the removed element as output

console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// CONCAT METHOD
//concat method will join two or more arrays
// concat method will return a joined array or a concatinated all array
//concat method will not change your oriignal array

let a = [20, 30, 40];
let b = [134, 43, 2];
let c = [45, 6, 33];
let res = a.concat(b, c);
console.log(res, "array");

const arr1 = [1, 2, [3, 4], 5];
const arr2 = [[4, 6], 56, 54, 5];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");

//Flat
//flat method will make nested array as single array
console.log(arr1.flat());

//JOIN method

//join method will convert array to string
const cities = ["bengaluru", "Hubballi", "Mumbai", "dharawada"];

let string = cities.join(", ");
console.log(string);

//findIndex and indexOf
//findIndex method will take a callback function

let arrayData = [3, 4, 78, 65, 2];

let x = arrayData.findIndex((age) => {
  return age > 18;
});
console.log(x); //it will only return the very first element that is satisfied the condition.

let arrayData1 = [17, 19, 78, 65, 2];

function voteEligibility(age) {
  return age > 18;
}
let y = arrayData1.findIndex(voteEligibility);
console.log(y);
