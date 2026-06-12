// Тема: Практичне заняття - Список покупок (Arrays)
// Базові методи мутації масивів: push, unshift, pop, shift

console.log("Grocery shopping list");

// 1. Оголошення порожнього масиву
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

// 2. Метод push() додає один або кілька елементів у КІНЕЦЬ масиву
shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList)); // ["Apples"]

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList)); // ["Apples", "Grapes"]

console.log("It looks like we need to get some cooking oil.");

// 3. Метод unshift() додає елемент на ПОЧАТОК масиву
// (зсуваючи всі інші елементи вправо)
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList)); // ["Vegetable Oil", "Apples", "Grapes"]

// push() може приймати одразу кілька аргументів
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));
// ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky", "Potato Chips"]

console.log("This looks like too much junk food.");

// 4. Метод pop() видаляє ОСТАННІЙ елемент із масиву
shoppingList.pop(); // Видалить "Potato Chips"
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));
// ["Chocolate Cake", "Vegetable Oil", ...]

console.log("On second thought, maybe we should be more health conscious.");

// 5. Метод shift() видаляє ПЕРШИЙ елемент із масиву
shoppingList.shift(); // Видалить "Chocolate Cake"

// 6. Пряма мутація: заміна елемента за конкретним індексом
// Оскільки shift() прибрав торт, на індексі 0 тепер "Vegetable Oil"
// Ми замінюємо його на "Canola Oil"
shoppingList[0] = "Canola Oil";

// Можеш додати цей console.log, щоб побачити фінальний результат у терміналі:
console.log(getShoppingListMsg(shoppingList));
