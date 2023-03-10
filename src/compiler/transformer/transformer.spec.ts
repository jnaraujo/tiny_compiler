import { describe, expect, it } from "vitest";
import { parser } from "../parser";
import { tokenizer } from "../tokenizer";
import { ASTType } from "../types/ast";
import { transformer } from "./transformer";

describe("transformer", () => {
  it("should transform the AST", () => {
    const tokens = tokenizer("(add 2 3)");
    const ast = parser(tokens);

    expect(transformer(ast)).toStrictEqual({
      type: ASTType.Program,
      body: [
        {
          type: ASTType.ExpressionStatement,
          expression: {
            type: ASTType.CallExpression,
            callee: {
              type: ASTType.Identifier,
              name: "add",
            },
            arguments: [
              {
                type: ASTType.NumberLiteral,
                value: "2",
              },
              {
                type: ASTType.NumberLiteral,
                value: "3",
              },
            ],
          },
        },
      ],
    });
  });
});
