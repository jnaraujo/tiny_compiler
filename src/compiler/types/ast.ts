export enum ASTType {
  Program = "Program",
  NumberLiteral = "NumberLiteral",
  StringLiteral = "StringLiteral",
  CallExpression = "CallExpression",
  Identifier = "Identifier",
  ExpressionStatement = "ExpressionStatement",
}

export interface ASTNode {
  type: ASTType;
  name?: string;
  value?: string;
  params?: ASTNode[];
  body?: ASTNode[];
}
