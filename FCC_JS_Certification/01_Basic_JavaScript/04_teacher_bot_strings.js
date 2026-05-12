// Тема: Практичне заняття - Teacher Bot
// (Шаблонні рядки, індексація, властивість length та метод indexOf)

console.log("Hi there!");

const botName = "teacherBot";

// 1. Шаблонні рядки (Template literals): використовуємо зворотні кавички (`) та інтерполяцію ${}
const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

// 2. Властивість .length: повертає кількість символів у рядку
console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`,
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`,
);

// 3. Індексація рядків: починається з 0 (Zero-based indexing)
console.log(subject[0]); // Виведе 'J'

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]); // Виведе 'a'

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`,
);

// 4. Отримання останнього символу: довжина мінус 1 (оскільки відлік з нуля)
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence.",
);

// 5. Метод .indexOf(): знаходить індекс початку підрядка
console.log(learningIsFunSentence.indexOf("Learning")); // Виведе 0

console.log(learningIsFunSentence.indexOf("fun")); // Виведе 12
// Якщо підрядок не знайдено (метод чутливий до регістру), повертає -1
console.log(learningIsFunSentence.indexOf("learning")); // Виведе -1
