const systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDay());
console.log(systemDate.getMonth());
console.log(systemDate.getFullYear());
console.log(systemDate.getTime());
console.log(systemDate.getMinutes());

const dateString = new Date("dec/21/2021");
console.log(dateString);
console.log(dateString.getDay());

"tuesday" / 08 / 2022;

const date1 = new Date("dec/22/2022");
let month = date1.getMonth();
console.log(month);
let dateValue = date1.getDate();
console.log(dateValue);
let year = date1.getFullYear();
console.log(year);

const fullYear = `${month + 1}/${dateValue}/${year}`;
console.log(fullYear);

const date2 = new Date("tuesday/August/2022");
let Month = date2.getMonth();
console.log(Month);

// tuesday/16 August/2022
const fullDate = systemDate.toLocaleDateString("en-in", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(fullDate);

let person = ["Avi", 90, "30-jul-2000"];
for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

//ASSIGNMENTS
const date5 = new Date("sept 12 2020");
const validDate = date5.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(validDate);
