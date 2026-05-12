function confirmEnding(str, target) {
  let lastPart = str.slice(-target.length);
  if (lastPart === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification",
  ),
);
console.log(confirmEnding("Open sesame", "sage"));
