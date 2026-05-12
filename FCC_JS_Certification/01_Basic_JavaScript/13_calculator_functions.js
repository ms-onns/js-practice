// Тема: Практичне заняття - Функції (Functions)
// Створення багаторазових блоків коду, параметри та оператор return

// 1. Функція додавання
// num1 та num2 - це параметри (вхідні дані)
function calculateSum(num1, num2) {
  // return завершує виконання функції та повертає результат
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// 2. Функція віднімання
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// 3. Функція множення
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

// 4. Функція ділення з обробкою помилок
function calculateQuotient(num1, num2) {
  // Використовуємо тернарний оператор: умова ? якщо_true : якщо_false
  // Це захищає програму від ділення на нуль (що в JS повертає Infinity)
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0)); // Виведе "Error: Division by zero"

// 5. Функція піднесення до квадрата
function calculateSquare(num) {
  // Оператор ** означає піднесення до степеня
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

// 6. Функція знаходження квадратного кореня
function calculateSquareRoot(num) {
  // Використовуємо знайомий нам об'єкт Math
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25)); // Додав console.log для наочності
