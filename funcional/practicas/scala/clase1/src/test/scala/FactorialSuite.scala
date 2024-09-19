
class FactorialSuite extends munit.FunSuite {
  import Clase1.factorial

  test("factorial(1) == 1") {
    assert(factorial(1l) == 1)
  }

  test("factorial(2) == 2") {
    assert(factorial(2l) == 2)
  }

  test("factorial(3) == 6") {
    assert(factorial(3l) == 6)
  }

  test("factorial(4) == 24") {
    assert(factorial(4l) == 24)
  }

  test("factorial(5) == 120") {
    assert(factorial(5l) == 120)
  }

  test("factorial(6) == 720") {
    assert(factorial(6l) == 720)
  }

  test("factorial(7) == 5040") {
    assert(factorial(7l) == 5040)
  }

  test("factorial(8) == 40320") {
    assert(factorial(8l) == 40320)
  }

  test("factorial(9) == 362880") {
    assert(factorial(9l) == 362880)
  }

  test("factorial(10) == 3628800") {
    assert(factorial(10l) == 3628800)
  }

}
