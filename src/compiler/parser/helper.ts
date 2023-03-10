import { Token, TokenType } from "../types/token";

export function isLeftParen(token: Token) {
  return token.type === TokenType.Paren && token.value === "(";
}

export function isRightParen(token: Token) {
  return token.type === TokenType.Paren && token.value === ")";
}
