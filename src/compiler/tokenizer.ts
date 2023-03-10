import { isLetter, isNumber, isQuoteMark, isWhiteSpace } from "./helper";
import { Token, TokenType } from "./types/token";

export function tokenizer(input: string) {
  const tokens: Token[] = [];

  let index = 0;

  while (index < input.length) {
    let char = input[index];

    if (char === "(") {
      tokens.push({
        type: TokenType.Paren,
        value: "(",
      });
      index++;
      continue;
    }

    if (char === ")") {
      tokens.push({
        type: TokenType.Paren,
        value: ")",
      });
      index++;
      continue;
    }

    if (isWhiteSpace(char)) {
      index++;
      continue;
    }

    if (isNumber(char)) {
      let value = "";

      while (isNumber(char)) {
        value += char;
        index++;
        char = input[index];
      }

      tokens.push({
        type: TokenType.Number,
        value,
      });

      continue;
    }

    if (isQuoteMark(char)) {
      let value = "";

      index++;

      char = input[index];

      while (!isQuoteMark(char)) {
        value += char;
        index++;
        char = input[index];
      }

      index++;

      tokens.push({
        type: TokenType.String,
        value,
      });

      continue;
    }

    if (isLetter(char)) {
      let value = "";

      while (isLetter(char)) {
        value += char;
        index++;
        char = input[index];
      }

      tokens.push({
        type: TokenType.Name,
        value,
      });

      continue;
    }

    throw new TypeError("Char is not valid: " + char);
  }

  return tokens;
}
