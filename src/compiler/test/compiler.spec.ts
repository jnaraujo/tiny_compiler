import { describe, expect, it } from "vitest";
import { codeGenerator } from "../codeGenerator";
import { parser } from "../parser";
import { tokenizer } from "../tokenizer";
import { transformer } from "../transformer";

describe("compiler", () => {
  it("should compile", () => {
    const input = "(add 2 (subtract 4 2))";
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAST = transformer(ast);

    const output = codeGenerator(newAST);

    expect(output).toBe("add(2, subtract(4, 2));");
  });
});
