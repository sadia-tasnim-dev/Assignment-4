function checkName(name) {
  if (typeof name !== "string") return "Invalid";

  const goodCharacters = ["a", "y", "i", "e", "o", "u", "w"];
  const isMatched = goodCharacters.includes(
    name[name.length - 1].toLowerCase()
  );

  if (isMatched) return "Good Name";

  return "Bad Name";
}

const nameType = checkName("Salman");
console.log(nameType);
