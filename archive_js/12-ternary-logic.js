// ==========================================
// Тема: Тернарний оператор та Логічні оператори (&&, ||)
// ==========================================

// 1. Тернарний оператор (? :)
let btnTernary = document.querySelector(".btn-ternary");
let box1 = document.querySelector(".box-1");
let isCatHungry = true;

btnTernary.addEventListener("click", () => {
  // Виконую перевірку умови і одразу присвоюю результат у змінну. Замінює просту конструкцію if/else.
  let message =
    isCatHungry === true ? "Йди годуй кота 🐈" : "Можна кодити далі 💻";
  box1.textContent = message;
});

// 2. Коротке замикання (&&)
let btnAnd = document.querySelector(".btn-and");
let box2 = document.querySelector(".box-2");
let hasAccess = true;

btnAnd.addEventListener("click", () => {
  // Якщо зліва true — змінна отримує праве значення. Якщо false — отримує false (виконання зупиняється).
  let secretData = hasAccess && "Ось твої секретні паролі: 3412678511";
  box2.textContent = secretData;
});

// 3. Значення за замовчуванням (||)
let btnOr = document.querySelector(".btn-or");
let box3 = document.querySelector(".box-3");

let fetchedUserName = ""; // Порожній рядок прирівнюється до false

btnOr.addEventListener("click", () => {
  // Якщо зліва false (порожньо/null/undefined) — змінна примусово отримує праве значення як резервне.
  let displayName = fetchedUserName || "Невідомий Користувач";
  box3.textContent = displayName;
});
