
const numbers = [1, 2, 6, 4, 5];
const length = numbers.length;

function isSorted (numbers, length) {
  if (length === 0 || length === 1) return true;
  return numbers.at (length - 1) >= numbers.at (length - 2) && isSorted (numbers, length - 1);
}

console.log (isSorted (numbers, length));