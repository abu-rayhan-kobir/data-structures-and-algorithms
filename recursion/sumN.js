

function sumN (number) {
  if (number === 0) return 0;
  return number + sumN (number - 1);
}

console.log (sumN (100));