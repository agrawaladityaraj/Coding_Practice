function maxProfit(costPerCut, salePrice, lengths) {
  let mProfit = 0;
  for (let i = 0; i <= lengths.length; i++) {
    for (let j = i + 1; j <= lengths.length; j++) {
      let profit = testProfit(costPerCut, salePrice, lengths.slice(i, j));
      if (profit >= mProfit) {
        mProfit = profit;
      }
    }
  }
  return mProfit;
}

function testProfit(costPerCut, salePrice, lengths) {
  let min = Math.min(...lengths);

  let mProfit = 0;

  for (let i = min; i > 0; i--) {
    let pc = 0;
    for (let j = 0; j < lengths.length; j++) {
      pc += parseInt(lengths[j] / i);
    }
    let profit = pc * i * salePrice - pc * costPerCut;
    if (profit >= mProfit) {
      mProfit = profit;
    }
  }

  return mProfit;
}

console.log(
  maxProfit(1000, 1, [200, 200, 200, 400, 200, 200, 200, 200, 200, 200, 200])
);
