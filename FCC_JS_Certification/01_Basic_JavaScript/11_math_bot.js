// Тема: Практичне заняття - Math Bot
// Робота з вбудованим об'єктом Math: генерація чисел та округлення

const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.",
);

// 1. Math.random() генерує псевдовипадкове дробове число від 0 (включно) до 1 (не включно)
const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

// 2. Формула для випадкового дробового числа в заданому діапазоні [min, max)
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer.",
);

// 3. Math.floor() ЗАВЖДИ округлює ВНИЗ (відкидає дробову частину)
const numRoundedDown = Math.floor(6.7); // Буде 6
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

// 4. Комбінація генерації діапазону та округлення вниз для отримання цілого числа
// Про-порада: ця конкретна формула поверне число від min до (max - 1)
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer.",
);

// 5. Math.ceil() ЗАВЖДИ округлює ВГОРУ
const numRoundedUp = Math.ceil(3.2); // Буде 4
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer.",
);

// 6. Math.round() робить математичне округлення (>= 0.5 вгору, < 0.5 вниз)
const numRounded = Math.round(2.7); // Буде 3
console.log(numRounded);
const numRounded2 = Math.round(11.2); // Буде 11
console.log(numRounded2);

console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.",
);

// 7. Пошук максимального та мінімального значення з переданих аргументів
const maxNum = Math.max(3, 125, 55, 24); // 125
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2); // 2
console.log(minNum);
