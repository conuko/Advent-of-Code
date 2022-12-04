const path = require("path");
const fs = require("fs");
let { performance } = require("perf_hooks");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const execStart = performance.now();

/* begin solution */
const sumOfPriorities = (array) => {
  return (
    array
      .split("\n")

      // split words in two exact long parts:
      .map((word) => [
        word.substring(0, word.length / 2),
        word.substring(word.length / 2, word.length),
      ])

      // get the letter that is included in both the first and the second half:
      .map(
        ([partA, partB]) =>
          [...partA].filter((letter) => partB.includes(letter))[0]
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
/* end solution */

const execEnd = performance.now();
const micros = (execEnd - execStart) * 1000;
console.log(`${answer} (${micros.toFixed(2)} µs)`);
