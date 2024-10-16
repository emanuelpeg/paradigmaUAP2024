
import { match, P } from 'ts-pattern';

// export abstract class Paragraph {}
export type Paragraph = ParagraphEmpty | ParagraphNotEmpty
export class ParagraphNotEmpty {
  constructor(public head: string, public tail: Paragraph) { }
}
export class ParagraphEmpty {
}

// Inserta 
export const insert = (x: string, t: Paragraph): Paragraph => match(t)
.with(P.instanceOf(ParagraphNotEmpty), ({ head, tail }) => 
  new ParagraphNotEmpty(head, insert(x, tail))
)
.otherwise(() => new ParagraphNotEmpty(x, new ParagraphEmpty()))

// Construye un Paragraph a partir de una ARRAY
export const fromArray = (array: string[]): Paragraph => 
  array.reduceRight((t, str) => new ParagraphNotEmpty(str, t), new ParagraphEmpty())
  

// Determina si un valor esta en el Paragraph
export const contains = (x: string, t: Paragraph): boolean => match(t)
.with({ head: x }, () => true) 
.with(P.instanceOf(ParagraphNotEmpty), ({ tail }) => contains(x, tail))
.otherwise(() => false)

const fold = <T>(t: Paragraph, fx: (acu: T, t: string) => T, init: T) : T => 
  match(t)
  .with(P.instanceOf(ParagraphNotEmpty), ({ head, tail }) => 
    fold(tail, fx, fx(init, head)))
.otherwise(() => init)

// Cuenta el numero de nodos del Paragraph
export const count = (t: Paragraph): number => fold(t, (acu, t) => 1 + acu, 0)

// Aplica una funcion a cada nodo del Paragraph
export const map = (t: Paragraph, fx: (v: string) => string): Paragraph => 
  fold(t, (acu, x) => insert(fx(x), acu), new ParagraphEmpty())
  

export const toString = (t: Paragraph): string => fold(t, (acu, x) => acu + x, "")

