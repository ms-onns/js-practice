import { products } from "./database.js";
const myCart = JSON.parse(localStorage.getItem("userCart")) || [];
console.log(products);

const catalogList = document.querySelector(".catalog");
const htmlString = products
  .map((car) => {
    return `
    <div class="card">
      <h3>${car.name}</h3>
      <p>Ціна: $${car.price}</p>
      <button class="add-btn" data-id="${car.id}">Купити</button>
    </div>
  `;
  })
  .join("");
catalogList.innerHTML = htmlString;

const buyButtons = document.querySelectorAll(".add-btn");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickId = event.target.dataset.id;
    console.log("Ти хочеш купити тачку з ID:", clickId);

    const selectedCar = products.find((car) => car.id == clickId);
    myCart.push(selectedCar);
    console.log(myCart);

    const cartString = JSON.stringify(myCart);
    localStorage.setItem("userCart", cartString);

    renderCart();
  });
});

const cartContainer = document.querySelector(".cart-items");

const renderCart = () => {
  if (myCart.length === 0) {
    cartContainer.innerHTML = "<p>Кошик порожній</p>";
    return;
  }

  const cartHtml = myCart
    .map((car) => {
      return `
      <div class="cart-item">
        <span>${car.name}</span>
        <span>$${car.price}</span>
      </div>
    `;
    })
    .join("");

  cartContainer.innerHTML = cartHtml;
};
renderCart();
