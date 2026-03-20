// ==========================================
// Тема: Сучасна асинхронність (async / await / try / catch)
// ==========================================

// 1. Сучасний запит (async / await)
let btnAsync = document.querySelector(".btn-async");
let asyncBox = document.querySelector(".async-box");
// Ключове слово async дозволяє використовувати await всередині функції.
btnAsync.addEventListener("click", async () => {
  asyncBox.textContent = "Завантаження...";
  // Код зупиняється на цих рядках і чекає завершення промісів (без ланцюжків .then).
  let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  let data = await response.json();

  asyncBox.textContent = `Знайдено хакера: ${data.name}`;
});

// 2. Обробка помилок (try / catch)
let btnError = document.querySelector(".btn-error");
let errorBox = document.querySelector(".error-box");

btnError.addEventListener("click", async () => {
  errorBox.textContent = "Спроба підключення...";
  // Блок try намагається виконати код. При будь-якому збої виконання миттєво переходить у catch, запобігаючи "падінню" скрипта.
  try {
    let response = await fetch("https://json-зламаний-сайт.com/users");
    let data = await response.json();
    errorBox.textContent = "Success";
  } catch (error) {
    errorBox.innerHTML = `<span class="error-text">Помилка з'єднання: Сервер недоступний</span>`;
    console.log(error);
  }
});

// 3. Комбінація: Async/Await + Map (Реальний сценарій)
let btnFinal = document.querySelector(".btn-final");
let finalBox = document.querySelector(".final-box");

btnFinal.addEventListener("click", async () => {
  finalBox.innerHTML = "Завантаження постів...";
  // Еталонний патерн: безпечний запит -> парсинг -> трансформація даних -> рендер у DOM.
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
    );
    let data = await response.json();

    let postsHTML = data
      .map((item) => `<div><strong>${item.title}</strong></div>`)
      .join("");

    finalBox.innerHTML = postsHTML;
  } catch (error) {
    finalBox.innerHTML = `<span class="error-text">Помилка</span>`;
    console.log(error);
  }
});
