// Тема: Лабораторна робота - Конвертер із Цельсія у Фаренгейт
// Перетворення математичної формули у функцію

function convertCtoF(celsius) {
  // Використовуємо надану формулу: F = C * (9/5) + 32
  // Оголошуємо змінну fahrenheit для збереження результату обчислень
  let fahrenheit = celsius * (9 / 5) + 32;

  // Повертаємо фінальне число
  return fahrenheit;
}

// Тести з лабораторної для самоперевірки у консолі
console.log("convertCtoF(-30) expected -22. Result:", convertCtoF(-30));
console.log("convertCtoF(-10) expected 14. Result:", convertCtoF(-10));
console.log("convertCtoF(0) expected 32. Result:", convertCtoF(0));
console.log("convertCtoF(20) expected 68. Result:", convertCtoF(20));
console.log("convertCtoF(30) expected 86. Result:", convertCtoF(30));
