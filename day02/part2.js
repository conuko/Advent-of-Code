const path = require("path");
const fs = require("fs");
let { performance } = require("perf_hooks");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const execStart = performance.now();

/* begin solution */

const totalScore = (array) => {
  let arr = [];
  array.split("\n").map((x) => {
    switch (x) {
      case "A X":
        arr.push(3);
        break;
      case "A Y":
        arr.push(4);
        break;
      case "A Z":
        arr.push(8);
        break;
      case "B X":
        arr.push(1);
        break;
      case "B Y":
        arr.push(5);
        break;
      case "B Z":
        arr.push(9);
        break;
      case "C X":
        arr.push(2);
        break;
      case "C Y":
        arr.push(6);
        break;
      case "C Z":
        arr.push(7);
        break;
      default:
        break;
    }
  });
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const answer = totalScore(input);

/* end solution */

const execEnd = performance.now();
const micros = (execEnd - execStart) * 1000;
console.log(`${answer} (${micros.toFixed(2)} µs)`);
