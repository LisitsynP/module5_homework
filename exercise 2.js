// задание 2 5.3

let x = 23;

if (typeof x === "number") {
  console.log(x + " - число");
} else if (typeof x === "boolean") {
  console.log(x + " - boolean");
} else if (typeof x === "string") {
  console.log(x + " - string");
} else {
  console.log("тип не определен");
}