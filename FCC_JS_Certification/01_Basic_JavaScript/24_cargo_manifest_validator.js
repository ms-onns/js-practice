// Тема: Лабораторна робота - Валідатор вантажного маніфесту
// Робота з імутабельністю об'єктів та суворим розділенням undefined (Missing) та null/wrong type (Invalid)

function normalizeUnits(manifest) {
  // Створюємо поверхневу копію об'єкта для збереження імутабельності (не змінюємо оригінал)
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // 1. Валідація containerId
  // Якщо властивості взагалі немає - це Missing
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
    // Якщо вона є, але це null, рядок, дробове або від'ємне число - це Invalid
  } else if (
    manifest.containerId === null ||
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // 2. Валідація destination
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    manifest.destination === null ||
    typeof manifest.destination !== "string" ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  // 3. Валідація weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    manifest.weight === null ||
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // 4. Валідація unit
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (
    manifest.unit === null ||
    typeof manifest.unit !== "string" ||
    (manifest.unit !== "kg" && manifest.unit !== "lb")
  ) {
    errors.unit = "Invalid";
  }

  // 5. Валідація hazmat
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (manifest.hazmat === null || typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  // Перевіряємо, чи порожній об'єкт помилок
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Якщо знайдені помилки форматування або відсутні дані
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
