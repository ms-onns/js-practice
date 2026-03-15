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

// =============================================================

let userBalance = 15000;
let drivingLicence = true;

if (userBalance >= 15000 && drivingLicence === true) {
  // Перевіряю, чи вистачає грошей ТА чи є права
  console.log(`вітаємо з придбанням авто`);
} else {
  console.log(`Транзакція не пройшла, зверніться до менеджера`);
}

// =============================================================

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

// =============================================================

let isBirthday = false;
let hasPromoCode = false;
if (hasPromoCode === true || isBirthday === true) {
  // Достатньо або промокоду, або дня народження
  console.log(`Вам надано промо-код `);
} else {
  console.log(`Наразі у вас відсутній промо-код`);
}

// =============================================================

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

// =============================================================

let hasPremium = false;
if (!hasPremium) {
  // Якщо Немає преміуму - крутимо рекламу
  console.log(`Show first ads video`);
} else {
  console.log(`Show video without ads`);
}

// =============================================================

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
