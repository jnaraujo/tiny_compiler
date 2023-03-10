import { describe, expect, it } from "vitest";
import {
  isLetter,
  isNumber,
  isQuoteMark,
  isWhiteSpace,
  textToChars,
} from "./helper";

describe("helper", () => {
  it("should break text into character", () => {
    const input = "(add 2 3)";
    const chars = textToChars(input);

    expect(chars).toStrictEqual(["(", "a", "d", "d", " ", "2", " ", "3", ")"]);
  });

  it("should test numbers", () => {
    expect(isNumber("4")).toBeTruthy();
    expect(isNumber(3)).toBeTruthy();
    expect(isNumber("22.5")).toBeTruthy();
    expect(isNumber(2.2)).toBeTruthy();
    expect(isNumber(-2)).toBeTruthy();
    expect(isNumber("-3")).toBeTruthy();
    expect(isNumber("a")).toBeFalsy();
    expect(isNumber("-a")).toBeFalsy();
  });

  it("should test letters", () => {
    expect(isLetter("a")).toBeTruthy();
    expect(isLetter(2)).toBeFalsy();
    expect(isLetter("2")).toBeFalsy();
    expect(isLetter("!")).toBeFalsy();
  });

  it("should test whitespace", () => {
    expect(isWhiteSpace(" ")).toBeTruthy();
    expect(isWhiteSpace("")).toBeFalsy();
  });

  it("should test quotes", () => {
    expect(isQuoteMark("'")).toBeTruthy();
    expect(isQuoteMark('"')).toBeTruthy();
    expect(isQuoteMark("`")).toBeFalsy();
    expect(isQuoteMark("a")).toBeFalsy();
  });
});
