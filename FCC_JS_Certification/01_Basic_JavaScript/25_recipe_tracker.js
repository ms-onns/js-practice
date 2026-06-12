// Тема: Практичне заняття - Трекер рецептів
// Робота з масивами об'єктів (найпопулярніша структура даних) та мутація властивостей

const recipes = [];

// 1. Створення об'єктів із "заглушками" (null та порожні рядки) для майбутніх даних
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

// 2. Додавання об'єктів у масив
recipes.push(recipe1, recipe2, recipe3);

// 3. Допоміжні функції для розрахунку значень
function getTotalIngredients(ingredients) {
  // Використовуємо властивість length масиву
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  // Класична каскадна перевірка
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

// 4. Тестування функцій на першому рецепті
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(`Recipe 1 ingredients count:`, recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(`Recipe 1 difficulty:`, recipe1DifficultyLevel);

// 5. Пряма мутація: оновлення властивостей кожного об'єкта розрахованими даними
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// Можна додати цей console.log, щоб побачити фінальний масив об'єктів у терміналі
// console.log(JSON.stringify(recipes, null, 2));
