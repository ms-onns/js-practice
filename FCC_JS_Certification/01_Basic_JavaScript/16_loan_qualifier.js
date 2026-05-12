// Тема: Практичне заняття - Перевірка вимог до позики
// Використання логічного оператора AND (&&) та каскадних умов if...else if

// Константи для зберігання порогових значень (правильна архітектура)
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  // Логічне І (&&) вимагає, щоб ОБИДВІ умови були true.
  // Перевірка завжди йде зверху вниз, від найвищих вимог до найнижчих.
  if (
    creditScore >= minCreditScoreForDuplex &&
    annualIncome >= minIncomeForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else {
    // Fallback: якщо жодна з вищих умов не спрацювала
    return "You don't qualify for any loans.";
  }
}

// Тестуємо функцію, щоб переконатися, що логіка відпрацьовує правильно
console.log("Test 1 (High Income/Score):", getLoanMessage(75000, 720));
// Очікуємо: You qualify for a duplex, condo, and car loan.

console.log("Test 2 (Medium Income/Score):", getLoanMessage(50000, 690));
// Очікуємо: You qualify for a condo and car loan.

console.log("Test 3 (Low Income/Score):", getLoanMessage(32000, 660));
// Очікуємо: You qualify for a car loan.

console.log("Test 4 (Poor Income/Score):", getLoanMessage(25000, 600));
// Очікуємо: You don't qualify for any loans.
