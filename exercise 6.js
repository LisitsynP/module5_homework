// задание 6 5.6

let arr = [1, 2, 1, 1];
let condt = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    condt = false;
  }
}
console.log(condt);