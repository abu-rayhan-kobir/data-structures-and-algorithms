function twoSum (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers.at(i) + numbers.at(j) === target) {
        return [i, j];
      }
    }
  }
}

const numbers = [2, 7, 11, 15];
const target = 26;
const result = twoSum (numbers, target);
console.log(result);