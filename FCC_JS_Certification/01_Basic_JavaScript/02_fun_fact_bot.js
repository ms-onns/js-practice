// Тема: Лабораторна робота - Створення бота для вікторини (let, const, конкатенація)

// 1. Привітання
console.log("Hello! I'm your coding fun fact guide!");

// 2. Оголошення базових змінних (використовуємо const, бо ім'я та локація бота не змінюються)
const botName = "JS_Mentor_Bot";
const botLocation = "the server";
const favoriteLanguage = "JavaScript";

// 3 & 4. Виведення інформації про бота
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

// 5 & 6. Перший факт (використовуємо let, бо далі будемо змінювати цю змінну)
let codingFact =
  favoriteLanguage + " was created by Brendan Eich in just 10 days in 1995.";
console.log(codingFact);

// 7 & 8. Перепризначення: Другий факт
codingFact =
  favoriteLanguage +
  " is known as the language of the web, running in almost every browser.";
console.log(codingFact);

// 9 & 10. Перепризначення: Третій факт
codingFact =
  "You can build both frontend and backend applications using " +
  favoriteLanguage +
  ".";
console.log(codingFact);

// 11. Прощальне повідомлення
console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    ".",
);
