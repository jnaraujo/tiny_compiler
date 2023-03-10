import { describe, expect, it } from "vitest";
import { TokenType } from "../types/token";
import { isLeftParen, isRightParen } from "./helper";

describe("helper", () => {
  it("isLeftParen", () => {
    expect(
      isLeftParen({
        type: TokenType.Paren,
        value: "(",
      })
    ).toBeTruthy();
    expect(
      isLeftParen({
        type: TokenType.Paren,
        value: ")",
      })
    ).toBeFalsy();
  });
  it("isRightParen", () => {
    expect(
      isRightParen({
        type: TokenType.Paren,
        value: "(",
      })
    ).toBeFalsy();
    expect(
      isRightParen({
        type: TokenType.Paren,
        value: ")",
      })
    ).toBeTruthy();
  });
});
