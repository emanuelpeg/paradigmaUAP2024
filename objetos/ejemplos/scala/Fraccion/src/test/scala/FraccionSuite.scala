/**
 * Para que funcionen los test hay que implementar el ==
 */
class FraccionSuite extends munit.FunSuite {

  test("test de test") {
    assert(1 + 2 == 3)
  }

  test("2/4 simplificado es igual 1/2") {
    assert(new Fraccion(2,4).simplificar() == new Fraccion(1,2))
  }
 
  test("2/4 es igual 1/2") {
    assert(new Fraccion(2,4) == new Fraccion(1,2))
  }
 
  test("3/4 + 1/2 es 5/4") {
    assert((new Fraccion(3,4) + new Fraccion(1,2)) == new Fraccion(5,4))
  }
  
  test("3/4 - 1/2 es 1/4") {
    assert((new Fraccion(3,4) - new Fraccion(1,2)) == new Fraccion(1,4))
  }
  
  test("3/4 * 1/2 es 3/8") {
    assert((new Fraccion(3,4) * new Fraccion(1,2)) == new Fraccion(3,8))
  }
  
  test("3/4 / 1/2 es 3/2") {
    assert((new Fraccion(3,4) / new Fraccion(1,2)) == new Fraccion(3,2))
  }
  
  test("- 3/4  es -3/4") {
    assert(-(new Fraccion(3,4)) == new Fraccion(-3,4))
  }
  
  test("3/4  es mayor -3/4") {
    assert(new Fraccion(3,4) > -(new Fraccion(3,4)))
  }
  
  test("3/4 es mayor 1/2") {
    assert(new Fraccion(3,4) > new Fraccion(1,2))
  }
  
  test("1/4 es menor 1/2") {
    assert(new Fraccion(1,4) < new Fraccion(1,2))
  }
}
