import { ASTNode, AstType } from "../types/ast";
import { Token, TokenType } from "../types/token";
import { isLeftParen, isRightParen } from "./helper";

export function parser(tokens: Token[]) {
  let index = 0;

  function walk(): ASTNode {
    let token = tokens[index];

    if (token.type === TokenType.Number) {
      index++;

      return {
        type: AstType.NumberLiteral,
        value: token.value,
      };
    }

    if (token.type === TokenType.String) {
      index++;

      return {
        type: AstType.StringLiteral,
        value: token.value,
      };
    }

    if (isLeftParen(token)) {
      index++;
      token = tokens[index];

      const node: ASTNode = {
        type: AstType.CallExpression,
        name: token.value,
        params: [],
      };

      index++;
      token = tokens[index];

      while (!isRightParen(token) || token.type !== TokenType.Paren) {
        node.params?.push(walk());
        token = tokens[index];
      }

      index++;

      return node;
    }

    throw new TypeError(token.type);
  }

  let ast = {
    type: AstType.Program,
    body: [] as any,
  };

  while (index < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}
