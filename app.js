// ==========================================
// Логічний оператор "І" (Logical AND: &&)
// ==========================================
let cartTotal = 1000;
let userRegister = true;

if (cartTotal >= 1000 && userRegister === true) {
  // && - треба щоб обидві умови були true (і сума, і рега)
  console.log(`У вас є знижка 20%`);
} else {
  console.log(`для отримання знижки необхідно зареєструватися`);
}

// ===

let userBalance = 15000;
let drivingLicence = true;

if (userBalance >= 15000 && drivingLicence === true) {
  // Перевіряю, чи вистачає грошей ТА чи є права
  console.log(`вітаємо з придбанням авто`);
} else {
  console.log(`Транзакція не пройшла, зверніться до менеджера`);
}

// ===

let userAge = 18;
let userPasport = true;

if (userAge >= 18 && userPasport === true) {
  // Пускаємо тільки якщо є 18 і показав паспорт
  console.log(`Ласкаво просимо на борт`);
} else {
  console.log(`Заборона на посадку, зверніться до персоналу`);
}
console.log("-------------------------------------");

// ==========================================
// Логічний оператор "АБО" (Logical OR: ||)
// ==========================================
let isStudent = false;
let clientAge = 16;
if (clientAge < 18 || isStudent === true) {
  // || - спрацює, якщо ХОЧА Б ОДНА умова підходить
  console.log(`Ваша знижка 10% Приємного перегляду`);
} else {
  console.log(`Приємного перегляду`);
}

// ===

let isBirthday = false;
let hasPromoCode = false;
if (hasPromoCode === true || isBirthday === true) {
  // Достатньо або промокоду, або дня народження
  console.log(`Вам надано промо-код `);
} else {
  console.log(`Наразі у вас відсутній промо-код`);
}

// ===

let motionDetected = false;
let isDarkOutside = true;
if (isDarkOutside === true || motionDetected === true) {
  // Вмикаю світло, якщо темно або хтось пройшов
  console.log(`Light ON`);
} else {
  console.log(`Light OFF`);
}
console.log("-------------------------------------");

// ==========================================
// Логічний оператор "НЕ" (Logical NOT: !)
// ==========================================
let hasVirus = false;
if (!hasVirus) {
  // ! перевертає значення. Читається як "Якщо вірусу немає"
  console.log(`Вірус не знайдено`);
} else {
  console.log(`Знайдено вірус`);
}

// ===

let hasPremium = false;
if (!hasPremium) {
  // Якщо Немає преміуму - крутимо рекламу
  console.log(`Show first ads video`);
} else {
  console.log(`Show video without ads`);
}

// ===

let isPaused = false;
if (!isPaused) {
  // Якщо гра не на паузі - продовжуємо рух
  console.log(`Motion On`);
} else {
  console.log(`Motion Off`);
}
console.log("-------------------------------------");

// ==========================================
// Комбінація логічних операторів (&&, ||, !)
// ==========================================
let highSalary = false;
let goodCreditHistory = true;
let hasCriminalRecord = false;
if ((goodCreditHistory === true || highSalary === true) && !hasCriminalRecord) {
  // Спочатку перевіряю дужки (історія АБО зп), а потім щоб не було судимостей
  console.log("Вам надано доступ до кредиту");
} else {
  console.log(`Доступ до кредиту відхилено`);
}
console.log("-------------------------------------");

// ==========================================
// Масиви (Списки даних / Arrays)
// ==========================================
let favoriteMovies = ["Harry Potter", "Interstellar", "Avengers"];
console.log(`The last movie I watched was - ${favoriteMovies[2]}`); // Пам'ятати: відлік завжди з нуля! [2] - це третій фільм

// ===

let playerInventory = ["Sword", "Shield", "Health Potion"];
playerInventory[1] = "Magic Amulet"; // Точкова заміна: замінив щит на амулет (за індексом 1)
console.log(`Інвентар (${playerInventory})`);

// ===

let chatMessages = ["Hi", "How are you?", "Call me"];
let messagesCount = chatMessages.length; // length - рахує загальну кількість елементів (повертає цифру)
console.log(`У вас - ${messagesCount} не прочитаних повідомлень`);

// ===

let dailyTasks = ["Learn JS", "I love working out"];
dailyTasks.push("Watch a movie"); // push - штовхає новий елемент у самий КІНЕЦЬ
console.log(`${dailyTasks}`);
console.log("-------------------------------------");

// ==========================================
// Керування масивами (pop, shift, unshift)
// ==========================================
let browserHistory = ["Google", "YouTube", "Netflix"];
browserHistory.pop(); // pop - відрізає ОСТАННІЙ елемент
console.log(browserHistory);

// ===

let newsFeed = ["Вчорашня новина", "Ранкова новина"];
newsFeed.unshift("Екстрена новина!"); // unshift - додає на самий ПОЧАТОК (всі інші посуваються)
console.log(newsFeed);

// ===

let customerQueue = ["Олег", "Марія", "Іван"];
customerQueue.shift(); // shift - видаляє перший елемент (як у реальній черзі)
console.log(customerQueue);
console.log("-------------------------------------");

// ==========================================
// Пошук у масивах (includes, indexOf)
// ==========================================
let guestList = ["Jhon", "Ben", "Anna"];
let isInvited = guestList.includes("Anna"); // includes - перевіряє чи є елемент (видає true/false)
console.log(isInvited);

// ===

let playlist = ["Phonk", "Chill", "Classic", "Rock"];
let songIndex = playlist.indexOf("Phonk"); // indexOf - шукає номер індексу. Якщо не знайде, видасть -1
console.log(songIndex);

// ===

let bannedUsers = ["user123", "hacker99", "spamBot"];
let currentUser = "hacker99";
if (bannedUsers.includes(currentUser)) {
  // Перевіряю чи є юзер у списку забанених
  console.log("Доступ заборонено! Ваш акаунт заблоковано.");
} else {
  console.log("Ласкаво просимо!");
}
console.log("-------------------------------------");

// ==========================================
// VIP Night Club
// ==========================================
let clubGuests = ["Anna", "Max", "Jhon"];
let newVip = "Drake";
if (!clubGuests.includes(newVip)) {
  // Якщо Дрейка НЕМАЄ в масиві (!)
  console.log("VIP гість прибув! Пропускаємо без черги");

  clubGuests.unshift(newVip); // Ставимо його першим
  clubGuests.pop(); // Виганяємо останнього з черги
} else {
  console.log("Цей гість вже в клубі");
}
console.log(clubGuests);
console.log("-------------------------------------");

// ==========================================
// Цикли (Loops) - цикл for
// ==========================================
for (let i = 1; i <= 5; i++) {
  // пам'ятати: i = 1 це старт, i <= 5 умова поки працює, i++ додає по одному
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  // зворотній відлік: починаю з 5, поки не дійде до 1, i-- віднімає по одному
  console.log(i);
}

// ===

let clients = ["Mike", "Fred", "Li"];

for (let i = 0; i < clients.length; i++) {
  // перебираю масив: починаю з 0 бо індекси завжди з нуля, і кручу до кінця списку через length
  console.log(`Вітаємо ${clients[i]}`);
}

// ===

let shoppingCart = ["Laptop", "Maus", "Keyboard"];
for (let item of shoppingCart) {
  // лінивий цикл for...of: просто бере кожен елемент по черзі і кидає в item
  console.log(`Товар у кошику ${item}`);
}
console.log("-------------------------------------");

// ==========================================
// Об'єкти (Objects) - Папки з даними
// ==========================================
let player = {
  username: "CyberNinja",
  level: 12,
  isOnline: true,
};
player.level = 13; // змінюю існуюче значення просто через крапку
player.guild = "Red Dragons"; // а ось так додаю нову властивість якої раніше взагалі не було
console.log(`Гравець ${player.username} досяг рівня - ${player.level}`);
console.log(`Гравець ${player.username} вступає в ${player.guild}`);

// ===

let smartphone = {
  brand: "Samsung",
  battery: 45,
  isFlashlightOn: false,
};

smartphone.battery = 100; // зарядив телефон
smartphone.isFlashlightOn = true; // увімкнув ліхтарик
console.log(
  `Телефон ${smartphone.brand} заряджено на ${smartphone.battery}%. Ліхтарик увімкнено: ${smartphone.isFlashlightOn}`,
);

// ===

let product = {
  title: "Nike",
  price: 3000,
  isAvailable: true,
};

product.price = 2400; // знизив ціну
product.discount = "-20%"; // додав знижку
console.log(
  `Увага! Товар ${product.title} тепер коштує ${product.price} грн. Ваша знижка: ${product.discount}`,
);
console.log("-------------------------------------");

// ==========================================
// *TEST Стрічка соцмережі
// ==========================================
let posts = [
  { author: "Max", text: "Started learning JavaScript" },
  { author: "Anna", text: "Learned TypeScript" },
];

for (let post of posts) {
  // перебираю масив об'єктів: post це поточний об'єкт, а через крапку дістаю його середину
  console.log(`User "${post.author}" - ${post.text}`);
}
console.log("-------------------------------------");

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

// ===

function welcomePlayer(playerName) {
  // playerName це параметр. сюди залетить те, що я передам в дужках нижче
  console.log(`Гравець ${playerName} підключився до сервера!`);
}
welcomePlayer("CyberNinja"); // передаю конкретне ім'я у функцію
welcomePlayer("DarkMage");

// ===

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

// ===

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

// ===

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

// ===

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

// ===

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

// ===

// Ультра короткий запис (Магія неявного return)
// Якщо дія всього одна, я викидаю {} і слово return. Стрілочка повертає результат автоматично!
let multiplyByTen = (number) => number * 10;
let result = multiplyByTen(5);
console.log(result);

// ===

// Перевірка, яка повертає просто true або false. Дуже знадобиться потім для фільтрації масивів!
let checkAge = (age) => age >= 18;
let userOne = checkAge(25);
let userTwo = checkAge(15);
console.log(userOne, userTwo);
