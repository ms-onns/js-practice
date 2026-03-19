// ==========================================
// Тема: Деструктуризація та Spread-оператор (...)
// ==========================================

// 1. Деструктуризація об'єкта
let btnObj = document.querySelector(".btn-obj");
let hackerProfile = {
  nickname: "Neo",
  level: 99,
  status: "Online",
};

btnObj.addEventListener("click", () => {
  // Розпаковую об'єкт. Створюю незалежні змінні nickname та level прямо з ключів об'єкта.
  let { nickname, level } = hackerProfile;
  console.log(`Hacker ${nickname} has a level ${level}`);
});

// 2. Деструктуризація масиву
let btnArr = document.querySelector(".btn-arr");
let ipAddresses = ["192.168.0.1", "10.0.0.5", "127.0.0.1", "172.16.254.1"];

btnArr.addEventListener("click", () => {
  // Розпаковую масив. Змінні отримують значення за порядком індексів (0 і 1).
  let [primaryIP, secondaryIP] = ipAddresses;
  console.log("Primary:", primaryIP, "Secondary:", secondaryIP);
});

// 3. Spread-оператор (...)
let btnSpread = document.querySelector(".btn-spread");
let oldServers = ["Server_Alpha", "Server_Beta"];
let newServers = ["Server_Gamma", "Server_Delta"];

btnSpread.addEventListener("click", () => {
  // Використовую spread-оператор (...) для безпечного злиття масивів без мутацій оригіналів.
  let allServers = [...oldServers, ...newServers, "Server_Omega"];
  console.log(allServers);
});
