console.log(30 + 30);
console.log(20 - 10);

let a = 20;
b = a++;
c = ++a;
console.log(b);
console.log(a);

let num = 10;
let num1 = "20";
console.log(num == num1); //equal operator
console.log(num === num1); //strict equal operator

let num3 = 20;
let num4 = "20";
console.log(num3 == num4);

let x = 40;
let y = "40";
console.log(x < y);
console.log(x != y); //not equal opeartor

// ternary operator

let age = 19;
console.log(age >= 18 ? "eligible for voting" : "not eligible");

let marks = 80;
console.log(
  marks >= 80
    ? "distinction"
    : marks > 70
    ? "first class"
    : marks > 35
    ? "second class"
    : "fail"
);
