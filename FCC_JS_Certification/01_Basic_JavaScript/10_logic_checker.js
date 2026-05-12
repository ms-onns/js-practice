// Тема: Практичне заняття - Керування потоком (Control Flow)
// Використання if, if...else та операторів порівняння

const hasDeveloperJob = true;

// 1. Простий if. Блок коду виконається ТІЛЬКИ якщо умова (hasDeveloperJob) є true.
// Правильна практика: не писати hasDeveloperJob === true.
if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

// 2. Оскільки isTimmyAGamer є false, рушій JS просто проігнорує цей блок коду.
if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 18;

// 3. Конструкція if...else (розгалуження).
// Перевіряємо умову з оператором "більше або дорівнює" (>=).
if (timmyAge >= 16) {
  // Виконається, якщо умова true (18 >= 16)
  console.log("Timmy is old enough to drive.");
} else {
  // Виконається у будь-якому іншому випадку (якщо умова false)
  console.log("Timmy is not old enough to drive.");
}
