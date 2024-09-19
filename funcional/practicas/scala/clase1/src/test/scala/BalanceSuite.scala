
class BalanceSuite extends munit.FunSuite {
  import Clase1.balance


  test("balance: () => OK ") {
    assert(balance("()".toList))
  }

  test("balance:((()))() => OK") {
    assert(balance("((()))()".toList))
  }

  test("balance:(()()) => OK") {
    assert(balance("(()()) ".toList))
  }

  test("balance: '(if (zero? x) max (/ 1 x))' is balanced") {
    assert(balance("(if (zero? x) max (/ 1 x))".toList))
  }

  test("balance: 'I told him ...' is balanced") {
    assert(balance("I told him (that it's not (yet) done).\n(But he wasn't listening)".toList))
  }

  test("balance: ':-)' is unbalanced") {
    assert(!balance(":-)".toList))
  }

  test("balance: counting is not enough") {
    assert(!balance("())(".toList))
  }

  test("balance:()())) => no OK") {
    assert(!balance("()())) ".toList))
  }

  test("balance:(()(()) => no OK") {
    assert(!balance("(()(()) ".toList))
  }

  test("balance: )( => no OK") {
    assert(!balance(")(".toList))
  }

}
