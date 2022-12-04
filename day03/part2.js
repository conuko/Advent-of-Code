const path = require("path");
const fs = require("fs");
let { performance } = require("perf_hooks");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const execStart = performance.now();

/* begin solution */
const sumOfPriorities = (array) => {
  return (
    array

      // split array into groups of 3 words:
      .match(/\w+\n\w+\n\w+/g)
      .map((group) => group.split("\n"))

      // get the letter that is included in all three words of each group:
      .map(
        (rucksacks) =>
          rucksacks
            .slice(1)
            .reduce(
              (commonItems, rucksackItems) =>
                [...rucksackItems].filter((item) => commonItems.includes(item)),
              rucksacks[0]
            )[0]
      )

      // convert the letter to the corespondig char number
      .map((letter) =>
        letter === letter.toUpperCase()
          ? letter.charCodeAt(0) - 65 + 27
          : letter.charCodeAt(0) - 97 + 1
      )

      // return the sum of all numbers in the array
      .reduce((acc, priority) => acc + priority, 0)
  );
};

const answer = sumOfPriorities(input);
console.log(answer);

/* end solution */

/* const execEnd = performance.now();
const micros = (execEnd - execStart) * 1000;
console.log(`${answer} (${micros.toFixed(2)} µs)`); */
