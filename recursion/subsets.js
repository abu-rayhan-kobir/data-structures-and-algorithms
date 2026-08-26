const set = [1, 2, 3, 4, 5, 6, 7, 8];
const answer = [];

function findSubsets (set, answer, index) {
  if (index === set.length) {
    process.stdout.write ("{ ");
    for (let element of answer ) {
      process.stdout.write (`${element}, `);
    }
    process.stdout.write ("}");
    process.stdout.write ("\n");
    return;
  }
  answer.push(set.at(index));
  findSubsets(set, answer, index + 1);
  answer.pop()
  findSubsets (set, answer, index + 1);
}

findSubsets (set, answer, 0);
console.log (answer.length);