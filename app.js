// ==========================================
// Логічний оператор "І" (Logical AND: &&)
// ==========================================
let cartTotal = 1000;
let userRegister = true;
if (cartTotal >= 1000 && userRegister === true) {
  console.log(`У вас є знижка 20%`);
} else {
  console.log(`для отримання знижки необхідно зареєструватися`);
}

// ===

let userBalance = 15000;
let drivingLicence = true;
if (userBalance >= 15000 && drivingLicence === true) {
  console.log(`вітаємо з придбанням авто`);
} else {
  console.log(`Транзакція не пройшла, зверніться до менеджера`);
}

// ===

let userAge = 18;
let userPasport = true;
if (userAge >= 18 && userPasport === true) {
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
  console.log(`Ваша знижка 10% Приємного перегляду`);
} else {
  console.log(`Приємного перегляду`);
}

// ===

let isBirthday = false;
let hasPromoCode = false;
if (hasPromoCode === true || isBirthday === true) {
  console.log(`Вам надано промо-код `);
} else {
  console.log(`Наразі у вас відсутній промо-код`);
}

// ===

let motionDetected = false;
let isDarkOutside = true;
if (isDarkOutside === true || motionDetected === true) {
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
  console.log(`Вірус не знайдено`);
} else {
  console.log(`Знайдено вірус`);
}

// ===

let hasPremium = false;
if (!hasPremium) {
  console.log(`Show first ads video`);
} else {
  console.log(`Show video without ads`);
}

// ===

let isPaused = false;
if (!isPaused) {
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
  console.log("Вам надано доступ до кредиту");
} else {
  console.log(`Доступ до кредиту відхилено`);
}
console.log("-------------------------------------");

// ==========================================
// Масиви (Списки даних / Arrays)
// ==========================================

let favoriteMovies = ["Harry Potter", "Interstellar", "Avengers"];
console.log(`The last movie I watched was - ${favoriteMovies[2]}`);

// ===

let playerInventory = ["Sword", "Shield", "Health Potion"];
playerInventory[1] = "Magic Amulet";
console.log(`Інвентар (${playerInventory})`);

// ===

let chatMessages = ["Hi", "How are you?", "Call me"];
let messagesCount = chatMessages.length;
console.log(`У вас - ${messagesCount} не прочитаних повідомлень`);

// ===

let dailyTasks = ["Learn JS", "I love working out"];
dailyTasks.push("Watch a movie");
console.log(`${dailyTasks}`);
console.log("-------------------------------------");

// ==========================================
// Керування масивами (pop, shift, unshift)
// ==========================================
let browserHistory = ["Google", "YouTube", "Netflix"];
browserHistory.pop();
console.log(browserHistory);

// ===

let newsFeed = ["Вчорашня новина", "Ранкова новина"];
newsFeed.unshift("Екстрена новина!");
console.log(newsFeed);

// ===

let customerQueue = ["Олег", "Марія", "Іван"];
customerQueue.shift();
console.log(customerQueue);
