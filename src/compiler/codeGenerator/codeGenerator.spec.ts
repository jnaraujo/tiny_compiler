import { describe, expect, it } from "vitest";
import { codeGenerator } from ".";
import { parser } from "../parser";
import { tokenizer } from "../tokenizer";
import { transformer } from "../transformer";

describe("codeGenerator", () => {
  it("should compile add and subtract", () => {
    const input = "(add 2 (subtract 4 2))";
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAST = transformer(ast);

    const output = codeGenerator(newAST);

    expect(output).toBe("add(2, subtract(4, 2));");
  });

  it("should compile divide and subtract", () => {
    const input = "(divide 2 (subtract 4 2))";
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const newAST = transformer(ast);

    const output = codeGenerator(newAST);

    expect(output).toBe("divide(2, subtract(4, 2));");
  });
});
