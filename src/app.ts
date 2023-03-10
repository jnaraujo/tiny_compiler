import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { compiler } from "./compiler";

async function init() {
  let rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });
  let input = "";

  do {
    input = await rl.question("Write the code: ");
    console.log(compiler(input));
  } while (input);
}

init();
