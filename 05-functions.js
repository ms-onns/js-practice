// ==========================================
// Функції (Functions) - Фабрики коду
// ==========================================
function showWarning() {
  // створив функцію. код спить поки я його не викличу
  console.log("УВАГА! Низький заряд батареї!");
}
showWarning(); // викликаю функцію
showWarning();
showWarning(); // можу викликати скільки завгодно разів

// =============================================================

function welcomePlayer(playerName) {
  // playerName це параметр. сюди залетить те, що я передам в дужках нижче
  console.log(`Гравець ${playerName} підключився до сервера!`);
}
welcomePlayer("CyberNinja"); // передаю конкретне ім'я у функцію
welcomePlayer("DarkMage");

// =============================================================

function doDamage(weapon, damage) {
  // функція спокійно приймає кілька параметрів через кому
  console.log(`Ви використали ${weapon} і нанесли ${damage} одиниць шкоди!`);
}
doDamage("Меч", 50); // передаю одразу два значення: зброю та урон
doDamage("Лук", 25);
doDamage("Фаєрбол", 100);
console.log("-------------------------------------");

// ==========================================
// Функції + Цикли (Схрещення)
// ==========================================
let serverPlayers = ["CyberNinja", "DarkMage", "BobaFett", "IronMan"];

function sendGift(player) {
  // ця функція вміє відправляти подарунок тільки одному гравцю
  console.log(`Гравцю ${player} відправлено подарунковий бокс! 🎁`);
}

for (let player of serverPlayers) {
  // тут цикл бере гравців з масиву і по черзі закидає їх у функцію
  sendGift(player);
}

// =============================================================

let playerLevels = [5, 12, 3, 25, 9, 10];

function checkAccess(level) {
  // важливо: перевіряю конкретний level (одну цифру), а не весь масив
  if (level >= 10) {
    console.log(`Доступ відкрито! Рівень: ${level}`);
  } else {
    console.log(`Заборонено. Потрібен 10+ рівень! Ваш: ${level}`);
  }
}

for (let level of playerLevels) {
  // цикл закидає кожну цифру у функцію перевірки
  checkAccess(level);
}

// =============================================================

let cart = [
  { name: "Laptop", price: 25000 },
  { name: "Maus", price: 800 },
  { name: "Keyboard", price: 1400 },
];

function processItem(item) {
  // функція приймає цілий об'єкт і дістає потрібне через крапку
  console.log(`Product: ${item.name}, Price: ${item.price}$`);
}

for (let item of cart) {
  processItem(item); // перебираю кошик і кожен товар кидаю у функцію
}
console.log("-------------------------------------");

// ==========================================
// Оператор return (Повернення результату)
// ==========================================
function calculateSalary(hours, rate) {
  // return не просто друкує в консоль, а реально віддає результат назовні
  return hours * rate;
}
let mySalary = calculateSalary(8, 500); // ловлю результат роботи заводу в коробку (змінну)
console.log(mySalary);

// =============================================================

function getDamage(baseDamage, isCritical) {
  // return миттєво зупиняє функцію. Якщо удар критичний - віддаю х2 і виходжу
  if (isCritical === true) {
    return baseDamage * 2;
  } else {
    return baseDamage; // інакше віддаю звичайний урон
  }
}
let normalHit = getDamage(50, false);
let superHit = getDamage(50, true);
console.log(normalHit, superHit);

// =============================================================

function withdrawMoney(balance, amount) {
  // Перевірка в банкоматі. Функція повертає різні тексти залежно від умови
  if (amount <= balance) {
    return "Операція успішна! Гроші видано.";
  } else {
    return "Відмова! Недостатньо коштів на рахунку.";
  }
}
let successTransaction = withdrawMoney(10000, 2000);
let failTransaction = withdrawMoney(5000, 8000);
console.log(successTransaction);
console.log(failTransaction);
console.log("-------------------------------------");

// ==========================================
// Стрілочні функції (Arrow Functions)
// ==========================================
let calculateFinalPrice = (price, discount) => {
  // Сучасний запис. Замість довгого слова function ставлю стрілочку =>
  return price - discount;
};
let finalPay = calculateFinalPrice(1000, 200);
console.log(finalPay);

// =============================================================

// Ультра короткий запис (Магія неявного return)
// Якщо дія всього одна, я викидаю {} і слово return. Стрілочка повертає результат автоматично!
let multiplyByTen = (number) => number * 10;
let result = multiplyByTen(5);
console.log(result);

// =============================================================

// Перевірка, яка повертає просто true або false. Дуже знадобиться потім для фільтрації масивів!
let checkAge = (age) => age >= 18;
let userOne = checkAge(25);
let userTwo = checkAge(15);
console.log(userOne, userTwo);
