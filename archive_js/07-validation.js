// ==========================================
// Валідація (Validation) - Перевірка введених даних
// ==========================================

// 1. Перевірка на порожнє поле (Форма авторизації)
let loginInput = document.querySelector(".login-input");
let loginBtn = document.querySelector(".login-btn");
let welcomeText = document.querySelector(".welcome-text");
// Перевіряю наявність тексту при кліку
loginBtn.addEventListener("click", () => {
  let userName = loginInput.value; // Зчитую те, що ввів користувач
  // Перевіряю на порожнечу (порожні лапки)
  if (userName === "") {
    welcomeText.textContent = "Помилка: введіть ім'я!";
    welcomeText.style.color = "red";
  } else {
    welcomeText.textContent = "Вітаємо, " + userName;
    welcomeText.style.color = "green";
  }
  loginInput.value = ""; // Очищую поле вводу після кліку
});

// 2. Перевірка пароля (Password Match) - Точний збіг
let secretInput = document.querySelector(".secret-input");
let unlockBtn = document.querySelector(".unlock-btn");
let securityStatus = document.querySelector(".security-status");

unlockBtn.addEventListener("click", () => {
  let userCode = secretInput.value;
  // Порівнюю код з еталонним значенням
  if (userCode === "JS2026") {
    securityStatus.textContent = "Доступ дозволено";
    securityStatus.style.color = "green";
  } else {
    securityStatus.textContent = "Не вірний код. Спробуйте ще раз.";
    securityStatus.style.color = "red";
  }
  secretInput.value = "";
});

// 3. Антибот (Captcha) - Математична перевірка
let captionInput = document.querySelector(".captcha-input");
let verifyBtn = document.querySelector(".verify-btn");
let botStatus = document.querySelector(".bot-status");

verifyBtn.addEventListener("click", () => {
  let checkBot = captionInput.value;
  if (checkBot === "10") {
    botStatus.textContent = "Перевірку пройдено.";
    botStatus.style.color = "green";
  } else {
    botStatus.textContent = "Помилка! Ви бот?";
    botStatus.style.color = "red";
  }
  captionInput.value = "";
});
