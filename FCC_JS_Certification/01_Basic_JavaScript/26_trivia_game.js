// Тема: Лабораторна робота - Тестова гра (Trivia Game)
// Робота з масивами об'єктів, генерація випадкових чисел та доступ до вкладених властивостей

// 1. Створення бази даних питань (Масив об'єктів)
const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4",
  },
  {
    category: "Science",
    question: "What color is the sky?",
    choices: ["blue", "green", "red"],
    answer: "blue",
  },
  {
    category: "History",
    question: "Who was the first US President?",
    choices: ["Lincoln", "Washington", "Obama"],
    answer: "Washington",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris",
  },
  {
    category: "Tech",
    question: "What does HTML stand for?",
    choices: ["Hyper Text", "Hot Mail", "Hyper Tool"],
    answer: "Hyper Text",
  },
];

// 2. Функція для вибору випадкового питання з бази
function getRandomQuestion(questionsArray) {
  // Патерн: генерація випадкового індексу від 0 до довжини масиву
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3. Функція для вибору випадкової відповіді комп'ютером (з масиву choices)
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 4. Логіка перевірки результату
function getResults(questionObj, computerChoice) {
  // Суворе порівняння (===) вибору комп'ютера з правильною відповіддю в об'єкті питання
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    // Використання шаблонних рядків (Template Literals) для динамічного виводу правильної відповіді
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// ==========================================
// Блок тестування (Можна розкоментувати для перевірки в терміналі)
// ==========================================
// const randomQ = getRandomQuestion(questions);
// console.log("Question:", randomQ.question);
// const compChoice = getRandomComputerChoice(randomQ.choices);
// console.log("Computer guessed:", compChoice);
// console.log(getResults(randomQ, compChoice));
