import { describe, expect, it } from "vitest";
import { tokenizer } from "../tokenizer";
import { ASTType } from "../types/ast";
import { parser } from "./parser";

describe("parser", () => {
  it("should test parser", () => {
    const tokens = tokenizer("(add 2 (subtract 4 2))");
    const ast = parser(tokens);

    expect(ast).toStrictEqual({
      type: ASTType.Program,
      body: [
        {
          type: ASTType.CallExpression,
          name: "add",
          params: [
            {
              type: ASTType.NumberLiteral,
              value: "2",
            },
            {
              type: ASTType.CallExpression,
              name: "subtract",
              params: [
                {
                  type: ASTType.NumberLiteral,
                  value: "4",
                },
                {
                  type: ASTType.NumberLiteral,
                  value: "2",
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
