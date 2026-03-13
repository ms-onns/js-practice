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
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// ===

let clients = ["Mike", "Fred", "Li"];

for (let i = 0; i < clients.length; i++) {
  console.log(`Вітаємо ${clients[i]}`);
}

// ===

let shoppingCart = ["Laptop", "Maus", "Keyboard"];
for (let item of shoppingCart) {
  console.log(`Товар у кошику ${item}`);
}
