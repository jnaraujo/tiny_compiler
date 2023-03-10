import { ASTNode, ASTType } from "../types/ast";
import { Token, TokenType } from "../types/token";
import { isLeftParen, isRightParen } from "./helper";

export function parser(tokens: Token[]): ASTNode {
  let index = 0;

  function walk(): ASTNode {
    let token = tokens[index];

    if (token.type === TokenType.Number) {
      index++;

      return {
        type: ASTType.NumberLiteral,
        value: token.value,
      };
    }

    if (token.type === TokenType.String) {
      index++;

      return {
        type: ASTType.StringLiteral,
        value: token.value,
      };
    }

    if (isLeftParen(token)) {
      index++;
      token = tokens[index];

      const node: ASTNode = {
        type: ASTType.CallExpression,
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
    type: ASTType.Program,
    body: [] as any,
  };

  while (index < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}
