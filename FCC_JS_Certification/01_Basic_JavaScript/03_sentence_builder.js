// Тема: Лабораторна робота - Генератор речень (Mad Libs)

// 1. Оголошення та початкове присвоєння змінних (історія про дракона)
let adjective = "huge";
let noun = "dragon";
let verb = "angry";
let place = "cave";
let adjective2 = "smoking";
let noun2 = "knights";

// 2. Створення першої історії за шаблоном
let firstStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";

// 3. Виведення першої історії
console.log("First story: " + firstStory);

// 4. Перепризначення змінних для другої історії (історія про кота)
adjective = "fluffy";
noun = "cat";
verb = "hungry";
place = "cardboard box";
adjective2 = "twitchy";
noun2 = "tuna cans";

// 5. Створення другої історії за тим самим шаблоном
let secondStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";

// 6. Виведення другої історії
console.log("Second story: " + secondStory);
