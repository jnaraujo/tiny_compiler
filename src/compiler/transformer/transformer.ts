import { traverser } from "../traverser";
import { ASTNode, ASTType } from "../types/ast";

export function transformer(ast: ASTNode) {
  const newAST = {
    type: ASTType.Program,
    body: [] as any,
  };

  // @ts-ignore
  ast._context = newAST.body;

  traverser(ast, {
    [ASTType.NumberLiteral]: {
      enter(node, parent) {
        // @ts-ignore
        parent._context.push({
          type: ASTType.NumberLiteral,
          value: node.value,
        });
      },
    },
    [ASTType.StringLiteral]: {
      enter(node, parent) {
        // @ts-ignore
        parent._context.push({
          type: ASTType.StringLiteral,
          value: node.value,
        });
      },
    },
    [ASTType.CallExpression]: {
      enter(node, parent) {
        let expression = {
          type: ASTType.CallExpression,
          callee: {
            type: ASTType.Identifier,
            name: node.name,
          },
          arguments: [] as any,
        };

        // @ts-ignore
        node._context = expression.arguments;

        if (parent?.type !== ASTType.CallExpression) {
          expression = {
            type: ASTType.ExpressionStatement,
            expression: expression,
          } as any;
        }

        // @ts-ignore
        parent._context.push(expression);
      },
    },
  });

  return newAST;
}
