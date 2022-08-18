//for of loop

let arr1 = [23, "adarsh", true];
for (let value of arr1) {
  console.log(value);
}

let person1 = [
  {
    name: "nithya",
    addr: "delhi",
    age: 23,
  },
];
for (let j of person1) {
  console.log(j);
}

//for in loop

let arr2 = [23, 45, "hana", , null];
for (let value in arr2) {
  console.log(arr2[value]);
}

let obj1 = {
  name: "devi",
  addr: "attiguppe",
  age: 23,
};
for (let key in obj1) {
  console.log(key);
  console.log(`${key}-${obj1[key]}`);
}
