// Тема: Лабораторна робота - Вибір обіду (Lunch Picker)
// Комплексна робота з масивами: мутації, генерація випадкових індексів та метод join

const lunches = [];

function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // pop() не тільки видаляє елемент, але й повертає його, що дозволяє зберегти його у змінну
    let item = arr.pop();
    console.log(`${item} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    // shift() повертає видалений перший елемент
    let item = arr.shift();
    console.log(`${item} removed from the start of the lunch menu.`);
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    // Професійний патерн: генерація випадкового індексу на основі довжини масиву
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];
    console.log(`Randomly selected lunch: ${item}`);
  }
  return arr;
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    // join(", ") бере всі елементи масиву і склеює їх у рядок, розділяючи комою з пробілом
    let items = arr.join(", ");
    console.log(`Menu items: ${items}`);
  }
}
