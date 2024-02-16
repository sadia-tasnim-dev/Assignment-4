function deleteInvalids(array) {
  if (!Array.isArray(array)) return "Invalid";
  const filterArray = [];
  for (element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      filterArray.push(element);
    }
  }
  return filterArray;
}
console.log(deleteInvalids([1, 6, NaN]));
