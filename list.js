const fruits = ["Banana", "Orange", "Apple"];

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[fruits.length] = "Lemon";

console.log(fruits);

fruits[2] = "Ananas";

console.log(fruits);

fruits[10] = "Apple";

console.log(fruits);

delete fruits[0];

console.log(fruits);

console.log(fruits[0]);

console.log(fruits.length);

console.log(fruits);

fruits.splice(2, 2, "Cerise", "Raisin");

console.log(fruits);

console.log(fruits.slice(2).slice(2));