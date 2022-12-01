/*
In this part the elves like to know the total Calories
carried by the top three Elves carrying the most Calories.
*/
const path = require("path");
const fs = require("fs");
let { performance } = require("perf_hooks");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const execStart = performance.now();

/* begin solution */
const sumPerElf = input.split("\n\n").map((group) =>
  group
    .split("\n")
    .map((line) => Number(line))
    .reduce((acc, calories) => acc + calories, 0)
);

const sumOfLargestThree = (array) => {
    return array
    .sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
    .slice(0, 3)
    .reduce((acc, calories) => acc + calories, 0);
};

const answer = sumOfLargestThree(sumPerElf);

/* end solution */

const execEnd = performance.now();
const micros = (execEnd - execStart) * 1000;
console.log(`${answer} (${micros.toFixed(2)} µs)`);