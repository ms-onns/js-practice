// Тема: Лабораторна робота - Підрахунок карт (Blackjack Card Counting)
// Робота з глобальним станом та оператором switch

// 1. Оголошуємо глобальну змінну для відстеження підрахунку
let count = 0;

function cardCounter(card) {
  // 2. Використовуємо switch для обробки різних груп карт.
  // Це набагато чистіше, ніж довгий ланцюжок if...else.
  switch (card) {
    // Низькі карти: збільшуємо лічильник
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    // Високі карти: зменшуємо лічильник
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;

    // Карти 7, 8, 9 нічого не змінюють, тому ми їх просто не додаємо (вони потрапляють у порожнечу)
  }

  // 3. Формуємо рішення: Bet (ставити), якщо count > 0, інакше Hold (чекати)
  // Використовуємо тернарний оператор для лаконічності
  let decision = count > 0 ? "Bet" : "Hold";

  // 4. Повертаємо результат у форматі "число рядок"
  return count + " " + decision;
}

// Тести для перевірки логіки (можна запустити в терміналі через node)
console.log(cardCounter(2)); // 1 Bet
console.log(cardCounter(3)); // 2 Bet
console.log(cardCounter(7)); // 2 Bet
console.log(cardCounter("K")); // 1 Bet
console.log(cardCounter("A")); // 0 Hold
