function calculateMoney(ticketSale) {
  if (ticketSale < 0) return "Invalid Number";

  const ticketPrice = 120;
  const gatemanFees = 500;
  const totalStaff = 8;
  const lunchPrice = 50;

  const totalTicketPrice = ticketSale * ticketPrice;
  const totalLunchCost = totalStaff * lunchPrice;
  const totalExpense = gatemanFees + totalLunchCost;
  const totalRevenue = totalTicketPrice - totalExpense;

  return totalRevenue;
}

function checkName(name) {
  if (typeof name !== "string") return "Invalid";

  const goodCharacters = ["a", "y", "i", "e", "o", "u", "w"];
  const isMatched = goodCharacters.includes(
    name[name.length - 1].toLowerCase()
  );

  if (isMatched) return "Good Name";

  return "Bad Name";
}

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

function password(obj) {
  const { name, birthYear, siteName = "" } = obj;
  if (!name || !birthYear || !siteName) return "invalid";
  if (birthYear.toString().length !== 4) return "invalid";

  return `${siteName[0].toUpperCase()}${siteName.slice(
    1,
    siteName.length
  )}#${name}@${birthYear}`;
}

function monthlySavings(arr, livingCost) {
  if (
    !Array.isArray(arr) ||
    typeof livingCost !== "number" ||
    isNaN(livingCost)
  )
    return "invalid input";

  let revenue = 0;
  for (const payment of arr) {
    if (payment >= 3000) {
      revenue += payment - payment * 0.2;
    } else {
      revenue += payment;
    }
  }

  const savings = revenue - livingCost;

  if (savings < 0) return "Earn More";
  return savings;
}
