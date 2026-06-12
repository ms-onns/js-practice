// Тема: Практичне заняття - Трекер дикої природи (Objects)
// Створення об'єктів, доступ до властивостей, мутації (додавання, зміна, видалення)

// 1. Створення об'єктів (Object literals)
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true,
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true,
};

// 2. Читання властивості через крапкову нотацію (Dot notation)
const getSpecies = (animal) => {
  return animal.species;
};

console.log("Tiger species:", getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log("Tiger age:", getAge(tiger));

// 3. Додавання нової властивості до існуючого об'єкта
const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log("Tiger with habitat:", addHabitat(tiger, "Rainforest"));

// 4. Оновлення існуючої властивості
const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log("Elephant updated age:", updateAge(elephant, 12));

// 5. Видалення властивості з об'єкта за допомогою оператора delete
const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(
  "Tiger after removing endangered status:",
  removeEndangeredStatus(tiger),
);

// 6. Перевірка наявності властивості в об'єкті за допомогою hasOwnProperty()
const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log("Does tiger have habitat?", hasHabitat(tiger)); // true (бо ми додали вище)
console.log("Does elephant have habitat?", hasHabitat(elephant)); // false

// 7. Динамічний доступ до властивостей через дужкову нотацію (Bracket notation)
// Це використовується, коли ім'я властивості передається як змінна
const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};

console.log("Dynamic access species:", getProperty(tiger, "species"));
console.log("Dynamic access age:", getProperty(elephant, "age"));
