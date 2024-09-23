class Clase2Suite extends munit.FunSuite  {

  import Clase2._

  test("test de test") {
    assert(1 + 2 == 3)
  }

  test("max 1,2,3,4 es 4") {
    assert(max(List(1, 2, 3, 4)) == 4)
  }

  test("max 1,2,3,4,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3 es 4") {
    assert(max(List(1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3)) == 4)
  }

  test("max 1,2,3,4,1,2,3,4 es 4") {
    assert(max(List(1, 2, 3, 4, 1, 2, 3, 4)) == 4)
  }

  test("min 1,2,3,4 es 1") {
    assert(min(List(1, 2, 3, 4)) == 1)
  }

  test("min 1,2,3,4,1,2,3,4 es 1") {
    assert(min(List(1, 2, 3, 4, 1, 2, 3, 4)) == 1)
  }

  test("mediana 1,2,3,4,5 es 3") {
    assert(mediana(List(1, 2, 3, 4, 5)) == 3)
  }

  test("mediana 1,2,3,4,5,6 es 3") {
    assert(mediana(List(1, 2, 3, 4, 5, 6)) == 3)
  }

  test("contar 1,2,3,4,5 es 5") {
    assert(contar(List(1, 2, 3, 4, 5)) == 5)
  }

  test("filtrarPares 1,2,3,4,5 es 2,4") {
    assert(filtrarPares(List(1, 2, 3, 4, 5)) == List(2, 4))
  }

  test("filtrarMultiplosDeTres 1,2,3,4,5 es 3") {
    assert(filtrarMultiplosDeTres(List(1, 2, 3, 4, 5)) == List(3))
  }

  test("filtrarMultiplosDeTres 1,2,3,4,5,6 es 3,6") {
    assert(filtrarMultiplosDeTres(List(1, 2, 3, 4, 5, 6)) == List(3, 6))
  }

  test("acumularUnidad 1,2,3,4,5 es 15") {
    assert(acumularUnidad(List(1, 2, 3, 4, 5)) == 15)
  }

  test("acumular Doble 1,2,3,4 es 20") {
    assert(acumularDoble(List(1, 2, 3, 4)) == 20)
  }

  test("acumular Cuadrado 1,2,3,4 es 30") {
    assert(acumularCuadrado(List(1, 2, 3, 4)) == 30)
  }

  test("QuickSort 4,2,3,1 es 1,2,3,4") {
    assert(QuickSort(List(4, 2, 3, 1)) == List(1, 2, 3, 4))
  }

  test("QuickSort 4,4,10,1 es 1,4,4,10") {
    assert(QuickSort(List(4, 4, 10, 1)) == List(1, 4, 4, 10))
  }

  test("unir 1,2,3 y 4,5 es 1,2,3,4,5") {
    assert(unir(List(1, 2, 3), List(4, 5)) == List(1, 2, 3, 4, 5))
  }

  test("unir 1,2,3 y {} es 1,2,3") {
    assert(unir(List(1, 2, 3), List()) == List(1, 2, 3))
  }

  test("unir {} y 4,5 es 4,5") {
    assert(unir(List(), List(4, 5)) == List(4, 5))
  }

  test("transformar 1,2,3,4 con toString es  1,2,3,4 ") {
    assert(transformar(List(1, 2, 3, 4), (a: Int) => a.toString) == List("1", "2", "3", "4"))
  }

  test("transformar 1,2,3,4 con toDouble es  1.0,2.0,3.0,4.0 ") {
    assert(transformar(List(1, 2, 3, 4), (a: Int) => a.toDouble) == List(1.0, 2.0, 3.0, 4.0))
  }

  test("unirOfSet 1,2,3 y 4,5 es 1,2,3,4,5") {
    assert(unirOfSet(List(1, 2, 3), List(4, 5)) == List(1, 2, 3, 4, 5))
  }

  test("unirOfSet 1,2,3 y {} es 1,2,3") {
    assert(unirOfSet(List(1, 2, 3), List()) == List(1, 2, 3))
  }

  test("unirOfSet {} y 4,5 es 4,5") {
    assert(unirOfSet(List(), List(4, 5)) == List(4, 5))
  }

  test("unirOfSet 1,1,2,3 y 4,5 es 1,2,3,4,5") {
    assert(unirOfSet(List(1, 1, 2, 3), List(4, 5)) == List(1, 2, 3, 4, 5))
  }

  test("unirOfSet 1,1,2,3 y {} es 1,2,3") {
    assert(unirOfSet(List(1, 1, 2, 3), List()) == List(1, 2, 3))
  }

  test("unirOfSet {} y 4,4,5 es 4,5") {
    assert(unirOfSet(List(), List(4, 4, 5)) == List(4, 5))
  }

  test("unirOfSet 1,1,2,3 y 4,4,5 es 1,2,3,4,5") {
    assert(unirOfSet(List(1, 1, 2, 3), List(4, 4, 5)) == List(1, 2, 3, 4, 5))
  }

  test("unirOfSet 1,2,3,4,5 y 4,5 es 1,2,3,4,5") {
    assert(unirOfSet(List(1, 2, 3, 4, 5), List(4, 5)) == List(1, 2, 3, 4, 5))
  }

  test("existe 1 en 1,2,3,4,5") {
    assert(existe(List(1, 2, 3, 4, 5), 1))
  }

  test("subSets (1,2) debe ser ((),(1,2),(1),(2))") {
    assert(Set(subSets(List(1, 2))) == Set(Nil,List(1), List(2), List(1,2)))
  }

  test("cortar () de n retorna Nil") {
    assert(Set(cortar(Nil,2)) == Set(Nil))
  }


}
