// задание 8 5.7

let map = new Map();
map.set("first", "item 1");
map.set(2, "item 2");
map.set(true, "item 3");
map.set("4", 4);
let resKey;
let resValue;

console.log(map.keys());
for (let name of map.keys()) {
  console.log(`ключ: ${name}; значение: ${map.get(name)};`);
}