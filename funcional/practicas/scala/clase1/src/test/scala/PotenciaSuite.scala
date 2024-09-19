
class PotenciaSuite extends munit.FunSuite {
  import Clase1.potencia

  test("potencia(5l,1) == 5") {
    assert(potencia(5l,1) == 5)
  }
  test("potencia(5l,2) == 25") {
    assert(potencia(5l,2) == 25)
  }
  test("potencia(5l,3) == 125") {
    assert(potencia(5l,3) == 125)
  }
  test("potencia(5l,4) == 625") {
    assert(potencia(5l,4) == 625)
  }
  test("potencia(5l,5) == 3125") {
    assert(potencia(5l,5) == 3125)
  }
  test("potencia(5l,6) == 15625") {
    assert(potencia(5l,6) == 15625)
  }
  test("potencia(5l,7) == 78125") {
    assert(potencia(5l,7) == 78125)
  }
  test("potencia(5l,8) == 390625") {
    assert(potencia(5l,8) == 390625)
  }
  test("potencia(5l,9) == 1953125") {
    assert(potencia(5l,9) == 1953125)
  }
  test("potencia(5l,10) == 9765625") {
    assert(potencia(5l,10) == 9765625)
  }
  test("potencia(56l,1) == 56") {
    assert(potencia(56l,1) == 56)
  }
  test("potencia(6l,2) == 36") {
    assert(potencia(6l,2) == 36)
  }
  test("potencia(53l,3) == 148877") {
    assert(potencia(53l,3) == 148877)
  }
  test("potencia(70l,4) == 24010000") {
    assert(potencia(70l,4) == 24010000)
  }
  test("potencia(42l,5) == 130691232") {
    assert(potencia(42l,5) == 130691232)
  }
  test("potencia(17l,6) == 24137569") {
    assert(potencia(17l,6) == 24137569)
  }
  test("potencia(90l,7) == 47829690000000") {
    assert(potencia(90l,7) == 47829690000000l)
  }
  test("potencia(48l,8) == 28179280429056") {
    assert(potencia(48l,8) == 28179280429056l)
  }
  test("potencia(3l,9) == 19683") {
    assert(potencia(3l,9) == 19683)
  }
  test("potencia(13l,10) == 137858491849") {
    assert(potencia(13l,10) == 137858491849l)
  }
  test("potencia(15l,15) == 437893890380859375") {
    assert(potencia(15l,15) == 437893890380859375l)
  }
  test("potencia(14l,14) == 11112006825558016") {
    assert(potencia(14l,14) == 11112006825558016l)
  }
  test("potencia(0l,12) == 0") {
    assert(potencia(0l,12) == 0)
  }
  test("potencia(8l,19) == 144115188075855872") {
    assert(potencia(8l,19) == 144115188075855872l)
  }
  test("potencia(7l,10) == 282475249") {
    assert(potencia(7l,10) == 282475249)
  }
  test("potencia(0l,3) == 0") {
    assert(potencia(0l,3) == 0)
  }
  test("potencia(13l,11) == 1792160394037") {
    assert(potencia(13l,11) == 1792160394037l)
  }
  test("potencia(12l,0) == 1") {
    assert(potencia(12l,0) == 1)
  }
  test("potencia(10l,3) == 1000") {
    assert(potencia(10l,3) == 1000)
  }
  test("potencia(4l,4) == 256") {
    assert(potencia(4l,4) == 256)
  }

}
