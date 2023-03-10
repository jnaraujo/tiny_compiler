import { describe, expect, it } from "vitest";
import { tokenizer } from "../tokenizer";
import { TokenType } from "../types/token";

describe("tokenizer", () => {
  it("simple math expression", () => {
    const input = "(add 2 (subtract 4 2))";

    expect(tokenizer(input)).toStrictEqual([
      {
        type: TokenType.Paren,
        value: "(",
      },
      {
        type: TokenType.Name,
        value: "add",
      },
      {
        type: TokenType.Number,
        value: "2",
      },
      {
        type: TokenType.Paren,
        value: "(",
      },
      {
        type: TokenType.Name,
        value: "subtract",
      },
      {
        type: TokenType.Number,
        value: "4",
      },
      {
        type: TokenType.Number,
        value: "2",
      },
      {
        type: TokenType.Paren,
        value: ")",
      },
      {
        type: TokenType.Paren,
        value: ")",
      },
    ]);
  });

  it("tokenize string", () => {
    const input = '(concat "foo" "bar")';
    expect(tokenizer(input)).toStrictEqual([
      {
        type: TokenType.Paren,
        value: "(",
      },
      {
        type: TokenType.Name,
        value: "concat",
      },
      {
        type: TokenType.String,
        value: "foo",
      },
      {
        type: TokenType.String,
        value: "bar",
      },
      {
        type: TokenType.Paren,
        value: ")",
      },
    ]);
  });
});
