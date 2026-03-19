// ==========================================
// Тема: Функціональні методи масивів (forEach, map, filter)
// ==========================================

// 1. forEach (Перебір)
let btnForEach = document.querySelector(".btn-foreach");
let users = ["Max", "Anna", "Jhon", "Elizabeth "];

btnForEach.addEventListener("click", () => {
  // Проходжу циклом по масиву без створення нового. Використовую для побічних дій (вивід у консоль).
  users.forEach((name) => {
    console.log("User: " + name);
  });
});

// 2. map (Трансформація масиву)
let btnMap = document.querySelector(".btn-map");
let pricesList = document.querySelector(".prices-list");
let basePrices = [100, 250, 500];

btnMap.addEventListener("click", () => {
  // Створюю новий масив на базі старого. Обов'язково повертаю (return) трансформований елемент.
  let doublePrices = basePrices.map((item) => {
    return item * 2;
  });
  console.log(doublePrices);
});

// 3. filter (Фільтрація)
let btnFilter = document.querySelector(".btn-filter");
let vipList = document.querySelector(".vip-list");
let clients = [
  { name: "Max", isVip: true },
  { name: "Anna", isVip: false },
  { name: "Jhon", isVip: true },
  { name: "Olivia", isVip: false },
];

btnFilter.addEventListener("click", () => {
  // Відсіюю елементи за умовою. У новий масив потрапляють лише ті, де умова === true.
  let onlyVip = clients.filter((item) => {
    return item.isVip === true;
  });
  console.log(onlyVip);
});
