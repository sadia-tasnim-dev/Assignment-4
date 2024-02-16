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

  if (savings < 0) return "earn More";
  return savings;
}

console.log(monthlySavings([1000, 2000, 2500], 5000));
