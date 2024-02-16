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
const revenuePerDay = calculateMoney(-10);
console.log(revenuePerDay);
