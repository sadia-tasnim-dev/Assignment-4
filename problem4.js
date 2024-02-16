const obj = { name: "Rahat", birthYear: 2002, siteName: "google" };

function password(obj) {
  const { name, birthYear, siteName = "" } = obj;
  if (!name || !birthYear || !siteName) return "invalid";
  if (birthYear.toString().length !== 4) return "invalid";

  return `${siteName[0].toUpperCase()}${siteName.slice(
    1,
    siteName.length
  )}#${name}@${birthYear}`;
}
console.log(password(obj));
