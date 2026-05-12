// Тема: Лабораторна робота - Перевірка булевого значення (Boo who)
// Використання оператора typeof для суворої перевірки типу даних

function booWho(bool) {
  // Оператор typeof перевіряє тип і повертає його назву у вигляді рядка.
  // Для true або false він завжди повертає "boolean".
  // Це сувора перевірка (===), яка відсікає рядки ("true"), числа (1) та об'єкти.
  return typeof bool === "boolean";
}

// Тести для перевірки (щоб ти сам бачив, як це працює в консолі)
console.log(booWho(true)); // Очікуємо: true
console.log(booWho(false)); // Очікуємо: true
console.log(booWho([1, 2, 3])); // Очікуємо: false (це об'єкт/масив)
console.log(booWho({ a: 1 })); // Очікуємо: false (це об'єкт)
console.log(booWho(1)); // Очікуємо: false (це число)
console.log(booWho(NaN)); // Очікуємо: false (це число)
console.log(booWho("a")); // Очікуємо: false (це рядок)
console.log(booWho("true")); // Очікуємо: false (це рядок, а не примітив)
console.log(booWho("false")); // Очікуємо: false (це рядок)
