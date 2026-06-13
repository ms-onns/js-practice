// Тема: Лабораторна робота - Колекція платівок (Record Collection)
// Глибока мутація вкладених об'єктів, дужкова нотація та керування масивами в об'єктах

// База даних колекції (імітація JSON з бекенду)
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Функція оновлення записів (CRUD операції)
function updateRecords(records, id, prop, value) {
  // 1. Правило видалення: Якщо value порожнє - видаляємо властивість (незалежно від того, tracks це чи ні)
  if (value === "") {
    delete records[id][prop];
  }
  // 2. Правило оновлення базової властивості: Якщо prop не tracks (наприклад, artist чи albumTitle)
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }
  // 3. Правило оновлення масиву: Якщо prop - це tracks
  else {
    // 3.1 Захисна перевірка: якщо масиву tracks ще не існує в цьому альбомі - створюємо його
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }

    // 3.2 Додаємо нове значення в кінець масиву tracks
    records[id].tracks.push(value);
  }

  // 4. Повертаємо оновлений об'єкт колекції
  return records;
}

// ==========================================
// Блок тестування (Можна розкоментувати для перевірки в терміналі)
// ==========================================
// Оновлюємо альбом 5439, додаючи артиста
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// Видаляємо артиста з альбому 2548
// console.log(updateRecords(recordCollection, 2548, "artist", ""));
