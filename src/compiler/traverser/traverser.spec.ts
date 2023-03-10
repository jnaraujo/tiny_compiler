import { describe, expect, it } from "vitest";
import { parser } from "../parser";
import { tokenizer } from "../tokenizer";
import { ASTType } from "../types/ast";
import { traverser } from "./traverser";

describe("traverser", () => {
  it("traverser", () => {
    const tokens = tokenizer("(add 2 3)");
    const ast = parser(tokens);

    let results: any = [];

    traverser(ast, {
      [ASTType.CallExpression]: {
        enter(node, parent) {
          results.push({
            event: "enter",
            type: ASTType.NumberLiteral,
            node,
            parent,
          });
        },
        exit(node, parent) {
          results.push({
            event: "exit",
            type: ASTType.CallExpression,
            node,
            parent,
          });
        },
      },
    });

    expect(results).toStrictEqual([
      {
        event: "enter",
        type: ASTType.NumberLiteral,
        node: ast.body![0],
        parent: ast,
      },
      {
        event: "exit",
        type: ASTType.CallExpression,
        node: ast.body![0],
        parent: ast,
      },
    ]);
  });
});
