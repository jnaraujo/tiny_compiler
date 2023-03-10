import { TokenType } from "./token";

export enum AstType {
  Program = "Program",
  NumberLiteral = "NumberLiteral",
  StringLiteral = "StringLiteral",
  CallExpression = "CallExpression",
}

export interface ASTNode {
  type: AstType;
  name?: string;
  value?: string;
  params?: ASTNode[];
}
export interface IAST {
  type: AstType;
  body: ASTNode[];
}
