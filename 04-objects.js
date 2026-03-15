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

// =============================================================

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

// =============================================================

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
