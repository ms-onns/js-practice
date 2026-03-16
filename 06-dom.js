// ==========================================
// Робота з DOM (Пошук та зміна елементів)
// ==========================================

// 1. Зміна тексту та стилів (.textContent)
let title = document.querySelector(".title");
// Знаходжу елемент на сторінці і міняю його текст. textContent розуміє тільки звичайний текст.
title.textContent = "А тепер тут керує JavaScript!";
title.style.color = "red"; // Можу міняти стилі прямо з JS, хоча в реальних проєктах це роблять рідко

// =============================================================

// 2. Зміна іншого елемента
let myStatus = document.querySelector(".server-status");
myStatus.textContent = "Система працює";
myStatus.style.color = "blue"; // JS виконує команди по черзі: спочатку заголовок, потім цей абзац

// =============================================================

// 3. Створення HTML структури (.innerHTML)
let profile = document.querySelector(".user-profile");
// innerHTML - дозволяє писати реальні HTML теги прямо з JS!
profile.innerHTML = "<h2>Джон Доу</h2><p>Рівень: Адмін</p>";
profile.style.border = "2px solid black";
profile.style.padding = "10px";

// ==========================================
// Події (Events) - Реакція на дії користувача
// ==========================================

// Отримую елементи з DOM
let btn = document.querySelector(".action-btn");
let result = document.querySelector(".result-text");
// Вішаю слухача на клік. Змінюю текст при спрацьовуванні.
btn.addEventListener("click", () => {
  result.textContent = "Кнопку натиснуто. Система зареєструвала подію.";
});

// =============================================================

// Зміна візуального стану елемента
let box = document.querySelector(".status-box");
let activate = document.querySelector(".activate-btn");
// При кліку змінюю контент та стилі блоку
activate.addEventListener("click", () => {
  box.innerHTML = "Система активована";
  box.style.backgroundColor = "green";
  box.style.color = "white";
});

// =============================================================

// Лічильник кліків із збереженням стану
let clicks = 0; // Зовнішня змінна для збереження рахунку між кліками
let clicker = document.querySelector(".clicker-btn");
let scoreDisplay = document.querySelector(".score-value");
// Інкрементую змінну та оновлюю DOM при кожному кліку
clicker.addEventListener("click", () => {
  clicks++;
  scoreDisplay.textContent = clicks;
});
