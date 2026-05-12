// Тема: Базові алгоритми - Скорочення рядків (Truncate a String)
// Практичне застосування властивості length, методу slice() та логіки if...else

function truncateString(str, num) {
  // Перевіряємо жорстку умову: чи перевищує довжина рядка дозволений ліміт (num)?
  if (str.length > num) {
    // Якщо так, обрізаємо рядок від індексу 0 до num (не включаючи num)
    // і конкатенуємо (приклеюємо) три крапки в кінці.
    return str.slice(0, num) + "...";
  }

  // Якщо умова вище не виконалася (рядок коротший або дорівнює num),
  // просто повертаємо оригінальний рядок без змін.
  return str;
}

// Тести з лабораторної для самоперевірки у консолі
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Очікуємо: "A-tisket..."

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// Очікуємо: "Peter Piper..."

// Перевірка, коли рядок коротший за ліміт (має повернутись без змін)
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2,
  ),
);
// Очікуємо: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-", 1));
// Очікуємо: "A..."
