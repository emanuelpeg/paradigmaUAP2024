
class ArbolBinarioSuite extends munit.FunSuite {

  import ArbolBinario._

  test("test de test") {
    assert(1 + 2 == 3)
  }

  test("test insert un elemento") {
    assert(countNodes(insert(2, EmptyTree())) == 1)
  }

  test("test countNodes") {
    assert(countNodes(insert(1,
      insert(3,
        insert(2,
          EmptyTree())))) == 3)
  }

  test("test elem exist") {
    assert(elem(2, insert(1,
      insert(3,
        insert(2,
          EmptyTree())))))
  }

  test("test elem not exist") {
    assert(!elem(20, insert(1,
      insert(3,
        insert(2,
          EmptyTree())))))
  }

  test("test elem en doble") {
    assert(elem(4, double(insert(1,
      insert(3,
        insert(2,
          EmptyTree()))))))
  }

  test("test to List") {
    assert(toList(insert(1,
      insert(3,
        insert(2,
          EmptyTree())))) == List(1, 2, 3))
  }

  test("test to nivel") {
    assert(nivel(insert(1,
      insert(3,
        insert(2,
          EmptyTree())))) == 2)
  }

  test("test to nivel 3") {
    assert(nivel(insert(1,
      insert(3,
        insert(2,
          insert(66,
            EmptyTree()))))) == 3)
  }

  test("test to bal 3") {
    assert(balancear(insert(1,
      insert(3,
        insert(2,
          insert(6,
            EmptyTree()))))) == balancear(insert(6,
      insert(3,
        insert(2,
          insert(1,
            EmptyTree()))))))
  }
}