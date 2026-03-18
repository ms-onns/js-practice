// ==========================================
// Тема: classList (Управління класами) та подія "input"
// ==========================================

// 1. Перемикач темної теми
let themeBtn = document.querySelector(".theme-btn");
let bodyElement = document.body; // Прямий доступ до тегу <body>
// Перемикаю CSS-клас теми при кліку
themeBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-theme");
});

// 2. Модальне вікно (Сховати / Показати)
let openBtn = document.querySelector(".open-modal-btn");
let closeBtn = document.querySelector(".close-modal-btn");
let modalBox = document.querySelector(".modal-box");
// Знімаю клас приховування (вікно з'являється)
openBtn.addEventListener("click", () => {
  modalBox.classList.remove("hidden");
});
// Додаю клас приховування (вікно зникає)
closeBtn.addEventListener("click", () => {
  modalBox.classList.add("hidden");
});

// 3. Жива перевірка (Подія "input")
let liveInput = document.querySelector(".live-input");
let liveStatus = document.querySelector(".live-status");
// Відстежую кожну зміну тексту в полі вводу
liveInput.addEventListener("input", () => {
  let textLength = liveInput.value.length; // Отримую поточну кількість символів
  if (textLength < 5) {
    liveStatus.textContent = "Error";
    // Встановлюю статус помилки
    liveStatus.classList.remove("success");
    liveStatus.classList.add("error");
  } else {
    liveStatus.textContent = "Success";
    // Встановлюю статус успіху
    liveStatus.classList.remove("error");
    liveStatus.classList.add("success");
  }
});
/* 
  елемент.classList.add("назва-класу") - додає клас (без крапки!)
  елемент.classList.remove("назва-класу") - видаляє клас
  елемент.classList.toggle("назва-класу") - перемикач: якщо класу немає - додасть, якщо є - видалить.
*/
