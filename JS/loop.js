// FOR LOOP
// does not work with objects
// doesnot ignore empty elements
// break statement is not supported

let arr = [20, "megha", , 45, , 69, 67];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// FOR OF LOOP
// does not work with objects
// doesnot ignore empty elements
// break statement is not supported

for (let i of arr) {
  console.log(i);
}

let students = [
  "avi",
  "akshata",
  "namana",
  "nayana",
  "nuthana",
  "prajwal",
  "vaibhav",
  "himagirish",
];
for (let i of students) {
  console.log(i);
}

let pens = [
  {
    brand: "renolt",
    color: "pink",
    price: 3,
    type: "gel",
  },
  {
    brand: "parker",
    color: "black",
    price: 500,
    type: "ball point",
  },
  {
    brand: "cello",
    color: "blue",
    price: 100,
    type: "ball point",
  },
  {
    brand: "bright",
    color: "red",
    price: 10,
    type: "gel",
  },
];

for (let i of pens) {
  if (i.price > 5 && i.type == "ball point") {
    console.log(i);
  }
}

for (let i = 0; i < pens.length; i++) {
  if (pens[i].price > 5) {
    console.log(pens[i]);
  }
}

//FOR IN
//works with object as well as arrays
//it ignores empty elements
//it doesnot ignore extra properties which dont have index

let person = {
  firstName: "megha",
  lastName: "Gowda",
  gender: "female",
  phnumber: 9164559711,
};
// we use key for objects
for (let key in person) {
  console.log(key);
  console.log(`${key}-${person[key]}`);
}
// value for array
for (let value in pens) {
  if (pens[value].type === "ball point" && pens[value].price > 5) {
    console.log(pens[value]);
  }
}
