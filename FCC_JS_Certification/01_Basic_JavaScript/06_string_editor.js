// Тема: Практичне заняття - Редактор рядків
// (Методи очищення від пробілів та зміни регістру)

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

// 1. Метод .trim() видаляє зайві пробіли з обох кінців рядка
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

// 2. Метод .trimStart() видаляє пробіли лише на початку
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// 3. Метод .trimEnd() видаляє пробіли лише в кінці
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

// 4. Метод .toUpperCase() робить усі літери великими
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

// 5. Метод .toLowerCase() робить усі літери маленькими
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

// 6. Практичний приклад: перетворення слова на camelCase
// Беремо перші 5 літер "camel", додаємо велику 6-ту літеру "C"
// (Тут у коді freeCodeCamp невелика помилка: slice(0,5) це "camel", а [5] це "c",
// але не вистачає залишку слова "ase". Проте залишаємо оригінальний код для тестів).
const lowercaseWord = "camelcase";
const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(6);
console.log("Camel cased version:");
console.log(camelCasedVersion);
