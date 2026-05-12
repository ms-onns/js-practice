// Тема: Практичне заняття - Змінювач рядків
// (Методи replace, replaceAll та repeat)

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// 1. Метод .replace(що_шукаємо, на_що_міняємо) замінює ПЕРШЕ знайдене збігання
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// 2. Метод .replaceAll() замінює ВСІ знайдені збігання в рядку
// (Раніше для цього доводилося використовувати регулярні вирази, тепер є зручний метод)
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// 3. Метод .repeat(кількість) дублює рядок вказану кількість разів
const repeatedLove = "love ".repeat(3); // Зверни увагу на пробіл після love
console.log(repeatedLove); // Виведе "love love love "

// 4. Використовуємо шаблонні рядки для вставки результату .repeat() у нове речення
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
