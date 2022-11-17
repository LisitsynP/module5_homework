// задание 1 5.3

let num = +prompt("введите значение");

if (num % 2 === 0) {
  console.log("чётное");
} else if (Number.isNaN(num)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  console.log("ne чётное");
}