// задание 3 5.4

let str = "hello";
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr(str));