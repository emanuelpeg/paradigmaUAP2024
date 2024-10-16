import * as practica from './practica'

const otherParagraph = new practica.ParagraphNotEmpty("Hola", 
  new practica.ParagraphNotEmpty("Mundo", 
    new practica.ParagraphNotEmpty("!!!!", 
      new practica.ParagraphEmpty())))

describe('Ejemplo', () => {
  test('insert', () => {
    const paragraph = practica.insert("!!!!",
      practica.insert("Mundo",
        practica.insert("Hola",
          new practica.ParagraphEmpty()
        )
      )
    )
    
    expect(paragraph).toEqual(otherParagraph)
  })

  test('fromArray', () => {
    const paragraph = practica.fromArray(["Hola","Mundo","!!!!"])
    expect(paragraph).toEqual(otherParagraph)
  })

  test('contains', () => {
    expect(practica.contains("Hola", otherParagraph)).toBe(true)
    expect(practica.contains("Chau", otherParagraph)).toBe(false)
  })

  test('count', () => {
    expect(practica.count(otherParagraph)).toBe(3)
    expect(practica.count(new practica.ParagraphEmpty)).toBe(0)
    expect(practica.count(new practica.ParagraphNotEmpty("Hola", new practica.ParagraphEmpty))).toBe(1)
  })

  test('map', () => {
    const paragraph = practica.fromArray(["HOLA","MUNDO","!!!!"])
    expect(practica.map(otherParagraph, x => x.toUpperCase() )).toEqual(paragraph)
  })

  test('toString', () => {
    expect(practica.toString(otherParagraph)).toBe('HolaMundo!!!!')
  })
})