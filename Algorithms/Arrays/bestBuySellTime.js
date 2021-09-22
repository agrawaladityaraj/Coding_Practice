function maxProfit(prices) {
  let max = 0; //initializing maxProfit
  for (let i = 0; i < prices.length; i++) {
    let next = prices.slice(i + 1, prices.length); //getting all the numbers after the current index
    let nextMax = Math.max(...next); //finding the maximim selling point
    if (nextMax <= prices[i]) {
      return max;
    } //if all the selling points are less the current, it is not possible to make any more profit
    max = nextMax - prices[i] > max ? nextMax - prices[i] : max; //finding the best possible profit for current situation
  }
  return max;
}

console.log(maxProfit([1, 2, 3, 4, 5]));
