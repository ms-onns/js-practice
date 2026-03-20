// ==========================================
// Тема: Асинхронність (Fetch API та Promises)
// ==========================================

// 1. Запит даних користувача (Один об'єкт)
let btnUser = document.querySelector(".btn-fetch-user");
let userBox = document.querySelector(".user-box");

btnUser.addEventListener("click", () => {
  userBox.textContent = "Завантаження з JSONPlaceholder...";

  // Відправляю GET-запит на сервер. Асинхронна операція.
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json()) // Розпаковую відповідь у формат JSON
    .then((data) => {
      // Працюю з даними тільки всередині цього блоку
      userBox.textContent = `Користувач: ${data.name}, Email: ${data.email}`;
    });
});

// 2. Запит масиву даних
let btnTodos = document.querySelector(".btn-fetch-todos");
let todosBox = document.querySelector(".todos-box");

btnTodos.addEventListener("click", () => {
  todosBox.textContent = "Завантаження задач...";

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      todosBox.textContent = `Задача: ${data.title}`;
    });
});

// 3. Рендер масиву з сервера (Fetch + map + join)
let btnList = document.querySelector(".btn-fetch-list");
let listBox = document.querySelector(".list-box");

btnList.addEventListener("click", () => {
  listBox.innerHTML = "Завантаження бази даних (може зайняти секунду)...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      // Комбіную запит до API з рендерингом списку
      let usersHTML = data
        .map((item) => {
          return `<div><strong>${item.name}</strong> - ${item.email}</div>`;
        })
        .join("");

      listBox.innerHTML = usersHTML;
    });
});
