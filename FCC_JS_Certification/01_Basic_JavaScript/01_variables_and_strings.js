// Тема: Змінні (let, const) та конкатенація рядків

console.log("Hi there!");
console.log("I am excited to talk to you.");

// Використовуємо let, бо ім'я бота буде змінюватися
let bot;
bot = "teacherBot";

// Використовуємо let, бо локація теоретично може змінитися
let botLocation = "the universe";

console.log("Allow me to introduce myself.");

// Використовуємо const, бо саме це речення ми перезаписувати не плануємо
const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

// Перепризначаємо змінну bot (можливо тільки завдяки let)
bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting =
  "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

// favoriteSubject ніколи не зміниться, тому суворо const
const favoriteSubject = "Computer Science";

const favoriteSubjectSentence =
  "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);
