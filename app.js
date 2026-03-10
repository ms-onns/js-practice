// ==========================================
// ТЕМА: Логічний оператор "І" (Logical AND: &&)
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
