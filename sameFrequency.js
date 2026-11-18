function sameFrequency(arg1, arg2) {
  if (arg1.length !== arg2.length) return false;
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  for (let val of arg1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }

  for (let val of arg2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }
  for (let key in frequencyCounterOne) {
    if (!(key ** 2 in frequencyCounterTwo)) {
      return false;
    }
    if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency([1, 2, 3, 2], [9, 1, 4, 4]));
