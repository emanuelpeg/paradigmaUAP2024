
import { match, P } from 'ts-pattern';

export abstract class Paragraph {}
export class ParagraphNotEmpty extends Paragraph {
  constructor(public head: string, public tail: Paragraph) { super(); }
}
export class ParagraphEmpty extends Paragraph {
  constructor() { super(); }
}

// Inserta 
export const insert = (x: string, t: Paragraph): Paragraph => t

// Construye un Paragraph a partir de una ARRAY
export const fromArray = (array: string[]): Paragraph => new ParagraphEmpty()
  

// Determina si un valor esta en el Paragraph
export const contains = (x: string, t: Paragraph): boolean => false

// Cuenta el numero de nodos del Paragraph
export const count = (t: Paragraph): number => 0

// Aplica una funcion a cada nodo del Paragraph
export const map = (t: Paragraph, fx: (v: string) => string): Paragraph => t

export const toString = (t: Paragraph): string => ""

