// ==========================================
// Тема: Рендеринг масивів у HTML (innerHTML + map)
// ==========================================

// 1. Простий список (Рендер рядків)
let btnList = document.querySelector(".btn-render-list");
let cityList = document.querySelector(".city-list");
let cities = ["Київ", "Львів", "Одеса", "Харків"];

btnList.addEventListener("click", () => {
  // Трансформую масив рядків у масив HTML-тегів. Метод .join("") склеює їх у суцільний текст без ком.
  let listItems = cities
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");
  // Вставляю згенерований рядок у DOM.
  cityList.innerHTML = listItems;
});

// 2. Рендер карток (Об'єкти)
let btnCards = document.querySelector(".btn-render-cards");
let productContainer = document.querySelector(".product-container");
let products = [
  { title: "Ноутбук", price: 30000 },
  { title: "Мишка", price: 800 },
  { title: "Клавіатура", price: 2500 },
];

btnCards.addEventListener("click", () => {
  // Ітерую масив об'єктів. Підставляю властивості об'єкта у шаблонні рядки (template literals).
  let cardsHTML = products
    .map((item) => {
      return `<div class="card"> <h4>${item.title}</h4> <p>Ціна: ${item.price} грн</p> </div>`;
    })
    .join("");

  productContainer.innerHTML = cardsHTML;
});

// 3. Комбінація (filter + map + join)
let btnActive = document.querySelector(".btn-render-active");
let activeContainer = document.querySelector(".active-users-container");
let allUsers = [
  { name: "Max", isActive: true },
  { name: "Olivia", isActive: false },
  { name: "Elizabeth", isActive: true },
  { name: "Mike", isActive: false },
];

btnActive.addEventListener("click", () => {
  // Будую ланцюжок методів (chaining). Відсіюю неактивних, залишок одразу трансформую в HTML і склеюю.
  let usersHTML = allUsers
    .filter((item) => {
      return item.isActive === true;
    })
    .map((item) => {
      return `<div class="card"><h4>${item.name}</h4><p>Статус: Активний 🟢</p></div>`;
    })
    .join("");

  activeContainer.innerHTML = usersHTML;
});
