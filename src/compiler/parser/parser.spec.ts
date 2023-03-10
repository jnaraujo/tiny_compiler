import { describe, expect, it } from "vitest";
import { tokenizer } from "../tokenizer";
import { AstType } from "../types/ast";
import { parser } from "./parser";

describe("parser", () => {
  it("should test parser", () => {
    const tokens = tokenizer("(add 2 (subtract 4 2))");
    const ast = parser(tokens);

    expect(ast).toStrictEqual({
      type: AstType.Program,
      body: [
        {
          type: AstType.CallExpression,
          name: "add",
          params: [
            {
              type: AstType.NumberLiteral,
              value: "2",
            },
            {
              type: AstType.CallExpression,
              name: "subtract",
              params: [
                {
                  type: AstType.NumberLiteral,
                  value: "4",
                },
                {
                  type: AstType.NumberLiteral,
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
