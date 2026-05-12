// Тема: Практичне заняття - Інспектор рядків
// (Методи includes та slice)

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

// 1. Метод .includes() перевіряє, чи міститься підрядок у рядку. Повертає true або false.
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(
  `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`,
);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(
  `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`,
);

// 2. Важливий нюанс: .includes() чутливий до регістру (case-sensitive)
const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(
  `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`,
);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

// 3. Метод .slice(початок, кінець) вирізає шматок рядка.
// Індекс "початок" включається, а "кінець" - ні.
const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

// Якщо почати з 0 і до 7, ми отримаємо символи з індексами 0,1,2,3,4,5,6
const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

// 4. Використання від'ємного індексу: відлік іде з кінця рядка
const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);
