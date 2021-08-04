function countPairs(numbers, k) {
  let num = [];
  for (let i of numbers) {
    if (num.indexOf(i) == -1) {
      num.push(i);
    }
  }

  let pairs = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] - num[j] === k || num[j] - num[i] === k) {
        pairs.push([num[i], num[j]]);
      }
    }
  }

  return pairs.length;
}
console.log(countPairs([1, 1, 2, 2, 3, 3], 1));
