import { describe, expect, it } from "vitest";
import { parser } from "../parser";
import { tokenizer } from "../tokenizer";
import { AstType } from "../types/ast";
import { traverser } from "./traverser";

describe("traverser", () => {
  it("traverser", () => {
    const tokens = tokenizer("(add 2 3)");
    const ast = parser(tokens);

    let results: any = [];

    traverser(ast, {
      [AstType.CallExpression]: {
        enter(node, parent) {
          results.push({
            event: "enter",
            type: AstType.NumberLiteral,
            node,
            parent,
          });
        },
        exit(node, parent) {
          results.push({
            event: "exit",
            type: AstType.CallExpression,
            node,
            parent,
          });
        },
      },
    });

    expect(results).toStrictEqual([
      {
        event: "enter",
        type: AstType.NumberLiteral,
        node: ast.body![0],
        parent: ast,
      },
      {
        event: "exit",
        type: AstType.CallExpression,
        node: ast.body![0],
        parent: ast,
      },
    ]);
  });
});
