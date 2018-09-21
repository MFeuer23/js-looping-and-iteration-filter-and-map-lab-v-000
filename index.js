// Code your solution here:
function driversWithRevenueOver(array, number) {
  const drivers = array.filter(d => d.revenue > number);
  return drivers;
}