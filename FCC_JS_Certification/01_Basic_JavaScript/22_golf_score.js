// Тема: Лабораторна робота - Перекладач результатів у гольфі (Golf Code)
// Робота з багатокаскадними умовами (if...else if) та доступом до елементів масиву

// 1. Data Separation: виносимо словник результатів у константу.
// Це робить код гнучким і зручним для підтримки.
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

// 2. Логіка конвертації результату
function golfScore(par, strokes) {
  // Умови йдуть від найменшої кількості ударів до найбільшої.
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    // Якщо жодна умова не виконалася (strokes >= par + 3), гравець іде додому
    return names[6];
  }
}

// Тести для перевірки (можеш розкоментувати, щоб перевірити у терміналі)
// console.log(golfScore(4, 1)); // Очікуємо: "Hole-in-one!"
// console.log(golfScore(4, 2)); // Очікуємо: "Eagle"
// console.log(golfScore(5, 2)); // Очікуємо: "Eagle"
// console.log(golfScore(4, 3)); // Очікуємо: "Birdie"
// console.log(golfScore(4, 4)); // Очікуємо: "Par"
// console.log(golfScore(5, 9)); // Очікуємо: "Go Home!"
