
import { match, P } from 'ts-pattern';
import { List } from './List';

type Tree = null | TreeNode;
export class TreeNode {
  constructor(public value: number, public left: Tree = null, public right: Tree = null) { }
}

// Inserta un valor en el arbol
export const insert = (x: number, t: Tree = null): TreeNode => new TreeNode(0)

// Construye un arbol a partir de una lista de numeros
export const fromList = (l: List<number>): Tree => new TreeNode(0)

// Determina si un valor esta en el arbol
export const contains = (x: number, t: Tree): boolean => true

// Cuenta el numero de nodos del arbol
export const count = (t: Tree): number => 0

// Duplica el valor de cada nodo del arbol
export const double = (t: Tree): Tree => new TreeNode(0)

// Aplica una funcion a cada nodo del arbol
export const map = (t: Tree, fx: (v: number) => number): Tree => new TreeNode(0)

// Convierte el arbol a una lista, recorriendo los nodos en profundidad (es decir, primero la raiz, despues el subarbol izquierdo, despues el subarbol derecho)
export const toList = (t: Tree): List<number> => null

// Determina la profundidad del arbol, es decir, la longitud del camino mas largo desde la raiz hasta una hoja
export const depth = (t: Tree): number => 0

// Determina si el arbol esta balanceado, es decir, la diferencia de profundidad entre el subarbol izquierdo y el derecho no es mayor que 1
export const isBalanced = (t: Tree): boolean => true

// Balancea el arbol, es decir, reorganiza los nodos de manera que la diferencia de profundidad entre el subarbol izquierdo y el derecho no sea mayor que 1
export const balance = (t: Tree): Tree => new TreeNode(0)

// Convierta el arbol a string, recorriendo los nodos en anchura (es decir, primero todos los del nivel 1, despues todos los del nivel 2, etc)
export const toString = (t: Tree): string => ''
