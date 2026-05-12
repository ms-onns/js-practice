// Тема: Лабораторна робота - Ворожка (Fortune Teller)
// Комбінація генерації випадкових чисел (Math) та розгалужень (if...else)

// 1. Ініціалізація змінних із ворожіннями
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// 2. Генерація випадкового цілого числа від 1 до 5 (включно)
// Math.random() генерує від 0 до 0.999...
// Множимо на 5: отримуємо від 0 до 4.999...
// Math.floor() відкидає дріб: отримуємо від 0 до 4
// Додаємо 1: отримуємо рівно від 1 до 5
const randomNumber = Math.floor(Math.random() * 5) + 1;

// Оголошуємо змінну через let, оскільки ми будемо присвоювати їй значення нижче
let selectedFortune;

// 3. Логіка вибору ворожіння
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// 4. Виведення результату
console.log(selectedFortune);
