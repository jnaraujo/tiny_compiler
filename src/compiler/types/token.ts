export enum TokenType {
  Paren = "paren",
  Number = "number",
  String = "string",
  Name = "name",
  WhiteSpace = "whitespace",
}

export interface Token {
  type: TokenType;
  value: string;
}
