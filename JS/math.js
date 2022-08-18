//MATH OBJECT

//min method will accept the list of values as arguments and
// return the minimum value among the list of values
let minNumber = Math.min(12, 23, 4, 5, 2, 234, 12, 1);
console.log(minNumber);

// MAX method will return the maximum value

let maxNumber = Math.max(24652, 323, 21, 22, 1, 3132, 4);
console.log(maxNumber);

// to find the power

let powofNumber = Math.pow(2, 3);
console.log(powofNumber);
//floor value gives the down value
let floorValue = Math.floor(20.7);
console.log(floorValue);
//ceil gives the top value
let ceilValue = Math.ceil(20.7);
console.log(ceilValue);

// RANDOM
let randomValue = Math.random();
console.log(randomValue);

let names = [
  "avi",
  "akshata",
  "namana",
  "nayana",
  "nuthana",
  "prajwal",
  "vaibhav",
  "himagirish",
];

let randomIndex = Math.floor(Math.random(names) * names.length);
console.log(names[randomIndex]);
