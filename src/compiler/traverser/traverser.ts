import { ASTNode, ASTType } from "../types/ast";

interface Visitor {
  [key: string]: {
    enter?(node: ASTNode, parent: ASTNode | null): void;
    exit?(node: ASTNode, parent: ASTNode | null): void;
  };
}

export function traverser(ast: ASTNode, visitor: Visitor) {
  function traverseArray(array: any[], parent: any) {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  }

  function traverseNode(node: ASTNode, parent: ASTNode | null) {
    let methods = visitor[node.type];

    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      case ASTType.Program:
        traverseArray(node.body!, node);
        break;
      case ASTType.CallExpression:
        traverseArray(node.params!, node);
        break;
      case ASTType.NumberLiteral:
      case ASTType.StringLiteral:
        break;
      default:
        throw new Error(node.type);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }
  traverseNode(ast, null);
}
