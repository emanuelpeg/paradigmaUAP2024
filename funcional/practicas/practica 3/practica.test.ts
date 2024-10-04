import * as practica from './practica'
import { TreeNode } from './practica'
import { list } from './List'

describe('Practica 3', () => {
  test('insert', () => {
    const tree = practica.insert(2,
      practica.insert(7,
        practica.insert(4,
          practica.insert(3)
        )
      )
    )
    const example = new TreeNode(3, new TreeNode(2), new TreeNode(4, null, new TreeNode(7)))
    expect(tree).toEqual(example)
  })

  test('fromList', () => {
    expect(practica.fromList(list(2, 7, 4, 3))).toEqual(new TreeNode(2, null, new TreeNode(7, new TreeNode(4, new TreeNode(3)))))
    expect(practica.fromList(list(3, 4, 7, 2))).toEqual(new TreeNode(3, new TreeNode(2), new TreeNode(4, null, new TreeNode(7))))
  })

  test('contains', () => {
    expect(practica.contains(3, new TreeNode(3))).toBe(true)
    expect(practica.contains(3, new TreeNode(2))).toBe(false)
    expect(practica.contains(4, practica.fromList(list(2, 7, 4, 3)))).toBe(true)
  })

  test('count', () => {
    expect(practica.count(new TreeNode(3))).toBe(1)
    expect(practica.count(new TreeNode(3, new TreeNode(2), new TreeNode(4)))).toBe(3)
    expect(practica.count(practica.fromList(list(2, 7, 4, 3)))).toBe(4)
  })

  test('map', () => {
    const tree = practica.fromList(list(3, 4, 7, 2))
    const example = practica.fromList(list(9, 12, 21, 6))
    expect(practica.map(tree, x => x * 3)).toEqual(example)
  })

  test('double', () => {
    const tree = practica.fromList(list(3, 4, 7, 2))
    const example = practica.fromList(list(6, 8, 14, 4))
    expect(practica.double(tree)).toEqual(example)
  })

  test('toList', () => {
    const tree = practica.fromList(list(3, 4, 7, 2))
    expect(practica.toList(tree)).toEqual(list(2, 3, 4, 7))
  })

  test('depth', () => {
    expect(practica.depth(new TreeNode(3))).toBe(1)
    expect(practica.depth(new TreeNode(3, new TreeNode(2), new TreeNode(4)))).toBe(2)
    expect(practica.depth(practica.fromList(list(2, 7, 4, 3)))).toBe(4)
  })

  test('isBalanced', () => {
    expect(practica.isBalanced(new TreeNode(3))).toBe(true)
    expect(practica.isBalanced(new TreeNode(3, new TreeNode(2), new TreeNode(4)))).toBe(true)
    expect(practica.isBalanced(practica.fromList(list(5, 3, 8, 2, 7, 0)))).toBe(false)
    expect(practica.isBalanced(practica.fromList(list(1, 2, 3, 4, 5, 6, 7)))).toBe(false)
  })

  test('balance', () => {
    for (let i = 1; i < 10; i++) {
      const l = list(...Array.from({ length: i * 3 }, () => Math.floor(Math.random() * 100)))
      const tree = practica.fromList(l)
      expect(practica.isBalanced(practica.balance(tree))).toBe(true)
    }
  })

  test('toString', () => {
    const tree = practica.fromList(list(3, 4, 7, 2))
    expect(practica.toString(tree)).toBe('3 2 4 7')
  })
})