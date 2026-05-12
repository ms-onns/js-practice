// Тема: Лабораторна робота - Оператори інкременту та декременту
// Префіксна (++x, --x) проти постфіксної (x++, x--) нотації

// 1. Префіксний інкремент (++counter)
// Нам треба отримати 11. Тому стартуємо з 10.
let counter = 10;
// ++counter спочатку збільшує 10 до 11, а потім записує 11 у updatedCounter.
const updatedCounter = ++counter;
console.log(`updatedCounter is ${updatedCounter} (Expected: 11)`);

// 2. Постфіксний інкремент (score++)
// Нам треба отримати 8. Тому стартуємо з 8.
let score = 8;
// score++ спочатку віддає старе значення (8) у finalScore, а вже потім збільшує score до 9.
const finalScore = score++;
console.log(
  `finalScore is ${finalScore} (Expected: 8). Note: score is now ${score}`,
);

// 3. Префіксний декремент (--coins)
// Нам треба отримати 2. Тому стартуємо з 3.
let coins = 3;
// --coins спочатку зменшує 3 до 2, а потім записує 2 у updatedCoins.
const updatedCoins = --coins;
console.log(`updatedCoins is ${updatedCoins} (Expected: 2)`);

// 4. Постфіксний декремент (health--)
// Нам треба отримати 7. Тому стартуємо з 7.
let health = 7;
// health-- спочатку віддає старе значення (7) у newHealth, а вже потім зменшує health до 6.
const newHealth = health--;
console.log(
  `newHealth is ${newHealth} (Expected: 7). Note: health is now ${health}`,
);
