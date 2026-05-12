// Тема: Лабораторна робота - Маскування е-пошти (Email Masker)
// Комбінація методів indexOf, slice та repeat для роботи з даними (PII)

function maskEmail(email) {
  // 1. Знаходимо індекс символу '@', який розділяє ім'я та домен
  const atIndex = email.indexOf("@");

  // 2. Розділяємо рядок на дві частини: ім'я користувача та домен
  // slice(0, atIndex) бере символи від початку до '@' (не включаючи '@')
  const username = email.slice(0, atIndex);
  // slice(atIndex) бере все, починаючи від '@' і до кінця рядка
  const domain = email.slice(atIndex);

  // 3. Беремо першу та останню літери імені користувача
  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  // 4. Вираховуємо кількість символів, які треба приховати
  // Від загальної довжини імені віднімаємо 2 (першу та останню літери)
  const maskedLength = username.length - 2;

  // 5. Генеруємо рядок із зірочок потрібної довжини
  const maskedPart = "*".repeat(maskedLength);

  // 6. Збираємо все докупи за допомогою конкатенації
  return firstChar + maskedPart + lastChar + domain;
}

// 7. Оголошуємо змінну поза межами функції (вимога тестів)
const email = "max_engineer@ukr.net";

// 8. Викликаємо функцію та виводимо результат
console.log(maskEmail(email));

// Тести з лабораторної для самоперевірки
console.log(maskEmail("apple.pie@example.com")); // Очікуємо: a*******e@example.com
console.log(maskEmail("freecodecamp@example.com")); // Очікуємо: f**********p@example.com
console.log(maskEmail("info@test.dev")); // Очікуємо: i**o@test.dev
console.log(maskEmail("user@domain.org")); // Очікуємо: u**r@domain.org
