const prompt = require("prompt-sync")({ sigint: true });
let row = prompt("how many rows of pyramid do you want?");
let col = 2 * row - 1;
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    if (j >= row - (i - 1) && j <= row + (i + 1)) {
      console.log("*");
    } else {
      console.log(" ");
    }
  }
  console.log("\n");
}
