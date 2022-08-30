let myArray = [20, 24, 30, 2, 33, 455, 43];
//push method
//push method add an element at the end
//it will take a value
//it will return a new array if we pushed any value
//it will change the length of an array
myArray.push(50);//one element
console.log(myArray);
myArray.push(60, 70, 80, 90);
console.log(myArray);

console.log(myArray.push());//return length of an array.

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
let b = [134, 43, 2,];
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
console.log(x);//it will only return the very first element that is satisfied the condition.


let arrayData1 = [17, 19, 78, 65, 78];

function voteEligibility(age) {
    return age > 18;
}
let y = arrayData1.findIndex(voteEligibility);
console.log(y);

//INDEXOF METHOD
//the indexOf method will return the first index position of the specified element
//indexOf method return -1 if your array does not have the specified value 
console.log(arrayData1.indexOf(74));// not found returns -1
console.log(arrayData1.indexOf(78));//returns index position

//isArray method

console.log(Array.isArray(arrayData));//this method will return boolian value after checking wether it is array

let e = 27;
console.log(Array.isArray(e));
//convert a string to array and reverse it
let lamda = "before a good leader be a good human";
let lamArray = lamda.split();
console.log(lamArray);


let newString = "";
for (let i = lamArray.length - 1; i--;) {
    newString += lamArray[i];
}
console.log(newString);

let lamda1 = "Before a good leader be a good human"
let bit = lamda1.split(" ");//this convert string to array
let git = bit.reverse();
console.log(git);

//MAP() METHOD
//map method takes a callback function 

bit.map((value, index, arr) => {
    console.log(value, index);
});


bit.filter((value, index, arr) => {
    console.log(value, "filter");
})

let filterArr = [20, 30, 40, 50, 60, 70];
filterArr.filter((value, index, arr) => {
    if (value > 20) {
        console.log(value);
    }
});

let filtered = filterArr.filter((value) => {
    return value + 10;
});//no change in the output

let mapped = filterArr.map((value) => {
    return value + 10;
});
console.log(filtered);//it doesnot modify the array it just filter
console.log(mapped);//it can modify the array


//FOREACH
let hobbies = ["cooking", "dancing", "singing", "cricket"];

hobbies.forEach(function (val, ind, arr) {
    console.log(`${val}-${ind}`);
});

//includes method

console.log(hobbies.includes("cricket"));

//find() method
//find method will take one callback function and it returns the first element that matches the condition.
let arrayFind = [30, 4, 52, 4, 56, 7, 8];
const found = arrayFind.find((value) => value > 10);
console.log(found);

//sort()
//it will arrange an elements in an ascending and decsending order
//new array with as sorted array
//by default sort() will return ascending order


let sortArray = [15, 18, 78, 13, 23, 44, 54, 32, 99, 100];
sortArray.sort()
console.log(sortArray);



//splice method
//we use splice method to add or remove the elements from the array
//it will affect original array
//if we are removing then it will return removed elements
// syntax
//splice(start index,no of elements to be removed,new elements to be add)

let spliceArray = [2, 4, 3, 7, 9, 5, 6, 8];
let splicedArray = spliceArray.splice(3, 2, 56, 78);
console.log(spliceArray);
console.log(splicedArray);


let noDelete = spliceArray.splice(2, 0, 25, 60);
console.log(spliceArray);
console.log(noDelete);

//Slice method
//slice method will return the new array
//it will take 2 arguments
let sliceArray = ["CIT", "SSIT", "KIT", "NIST", "Christ"];

const data2 = sliceArray.slice(1);
const data3 = sliceArray.slice(2);
const data4 = sliceArray.slice(2, 4);
const data5 = sliceArray.slice(-2);
const data6 = sliceArray.slice(2, -1);

console.log(data2);
console.log(data3);
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);




