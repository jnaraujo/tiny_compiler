import { ASTNode, ASTType } from "../types/ast";

export function codeGenerator(node: ASTNode): string | any {
  switch (node.type) {
    case ASTType.Program:
      return node.body?.map(codeGenerator).join("\n");

    case ASTType.ExpressionStatement:
      // @ts-ignore
      return codeGenerator(node.expression) + ";";

    case ASTType.CallExpression:
      return (
        //@ts-ignore
        codeGenerator(node.callee) +
        "(" +
        //@ts-ignore
        node.arguments.map(codeGenerator).join(", ") +
        ")"
      );
    case ASTType.Identifier:
      return node.name;

    case ASTType.NumberLiteral:
      return node.value;

    case ASTType.StringLiteral:
      return `"${node.value}"`;

    default:
      throw new TypeError(node.type);
  }
}
