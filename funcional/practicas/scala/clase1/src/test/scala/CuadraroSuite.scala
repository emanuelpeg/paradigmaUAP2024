
class CuadraroSuite extends munit.FunSuite {
  import Clase1.cuadrado

  test("cuadrado(1) == 1") {
    assert(cuadrado(1l) == 1)
  }

  test("cuadrado(2) == 4") {
    assert(cuadrado(2l) == 4)
  }

  test("cuadrado(3) == 9") {
    assert(cuadrado(3l) == 9)
  }

  test("cuadrado(4) == 16") {
    assert(cuadrado(4L) == 16)
  }

  test("cuadrado(5) == 25") {
    assert(cuadrado(5l) == 25)
  }

  test("cuadrado(6) == 36") {
    assert(cuadrado(6l) == 36)
  }

  test("cuadrado(7) == 49") {
    assert(cuadrado(7l) == 49)
  }

  test("cuadrado(8) == 64") {
    assert(cuadrado(8l) == 64)
  }

  test("cuadrado(9) == 81") {
    assert(cuadrado(9l) == 81)
  }

  test("cuadrado(10) == 100") {
    assert(cuadrado(10l) == 100)
  }

}
