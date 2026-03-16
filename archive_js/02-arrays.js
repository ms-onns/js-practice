// ==========================================
// Масиви (Списки даних / Arrays)
// ==========================================
let favoriteMovies = ["Harry Potter", "Interstellar", "Avengers"];
console.log(`The last movie I watched was - ${favoriteMovies[2]}`); // Пам'ятати: відлік завжди з нуля! [2] - це третій фільм

// =============================================================

let playerInventory = ["Sword", "Shield", "Health Potion"];
playerInventory[1] = "Magic Amulet"; // Точкова заміна: замінив щит на амулет (за індексом 1)
console.log(`Інвентар (${playerInventory})`);

// =============================================================

let chatMessages = ["Hi", "How are you?", "Call me"];
let messagesCount = chatMessages.length; // length - рахує загальну кількість елементів (повертає цифру)
console.log(`У вас - ${messagesCount} не прочитаних повідомлень`);

// =============================================================

let dailyTasks = ["Learn JS", "I love working out"];
dailyTasks.push("Watch a movie"); // push - штовхає новий елемент у самий КІНЕЦЬ
console.log(`${dailyTasks}`);
console.log("-------------------------------------");

// ==========================================
// Керування масивами (pop, shift, unshift)
// ==========================================
let browserHistory = ["Google", "YouTube", "Netflix"];
browserHistory.pop(); // pop - відрізає ОСТАННІЙ елемент
console.log(browserHistory);

// =============================================================

let newsFeed = ["Вчорашня новина", "Ранкова новина"];
newsFeed.unshift("Екстрена новина!"); // unshift - додає на самий ПОЧАТОК (всі інші посуваються)
console.log(newsFeed);

// =============================================================

let customerQueue = ["Олег", "Марія", "Іван"];
customerQueue.shift(); // shift - видаляє перший елемент (як у реальній черзі)
console.log(customerQueue);
console.log("-------------------------------------");

// ==========================================
// Пошук у масивах (includes, indexOf)
// ==========================================
let guestList = ["Jhon", "Ben", "Anna"];
let isInvited = guestList.includes("Anna"); // includes - перевіряє чи є елемент (видає true/false)
console.log(isInvited);

// =============================================================

let playlist = ["Phonk", "Chill", "Classic", "Rock"];
let songIndex = playlist.indexOf("Phonk"); // indexOf - шукає номер індексу. Якщо не знайде, видасть -1
console.log(songIndex);

// =============================================================

let bannedUsers = ["user123", "hacker99", "spamBot"];
let currentUser = "hacker99";
if (bannedUsers.includes(currentUser)) {
  // Перевіряю чи є юзер у списку забанених
  console.log("Доступ заборонено! Ваш акаунт заблоковано.");
} else {
  console.log("Ласкаво просимо!");
}
console.log("-------------------------------------");

// ==========================================
// VIP Night Club
// ==========================================
let clubGuests = ["Anna", "Max", "Jhon"];
let newVip = "Drake";
if (!clubGuests.includes(newVip)) {
  // Якщо Дрейка НЕМАЄ в масиві (!)
  console.log("VIP гість прибув! Пропускаємо без черги");

  clubGuests.unshift(newVip); // Ставимо його першим
  clubGuests.pop(); // Виганяємо останнього з черги
} else {
  console.log("Цей гість вже в клубі");
}
console.log(clubGuests);
console.log("-------------------------------------");
