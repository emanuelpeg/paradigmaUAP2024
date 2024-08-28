/**
 * En matemáticas, una fracción, número fraccionario, (del vocablo latín frctus,
 * fractĭo -ōnis, roto, o quebrado)1 es la expresión de una cantidad dividida
 * entre otra cantidad; es decir que representa un cociente no efectuado de
 * números. Por razones históricas también se les llama fracción común, fracción
 * vulgar o fracción decimal. El conjunto matemático que contiene a las fracciones
 * es el conjunto de los números racionales, denotado .
 */
class Fraccion(val numerador:Int, val denominador:Int) {
  require(denominador != 0, "El denominador no puede ser 0")

  def this(numerador:Int) = this(numerador, 1)

  /**
   * En matemáticas, se define el máximo común divisor(MCD) de dos o más números
   * enteros al mayor número entero que los divide sin dejar resto.
   * El algoritmo de Euclides, que utiliza el algoritmo de la división junto
   * al hecho que el MCD de dos números también divide al resto obtenido de
   * dividir el mayor entre el más pequeño.
   */
  def mcd(): Int = {
    def mcdaux(a: Int, b: Int): Int = {
      if (b == 0) a
      else mcdaux(b, a % b)
    }
    mcdaux(numerador.abs, denominador.abs)
  }
  def simplificar () : Fraccion = {
    val mcd = this.mcd()
    new Fraccion(numerador / mcd, denominador / mcd)
  }

  /*
   *
   *   a   +   c   =       ad + bc     (se multiplica cruzado y los productos de suman)
   *  --       --         --------
   *   b       d             bd        (se multiplican los denominadores)
   *
   */
  def + (otro : Fraccion) : Fraccion = {
    val numerador = this.numerador * otro.denominador + otro.numerador * this.denominador
    val denominador = this.denominador * otro.denominador
    new Fraccion(numerador, denominador).simplificar()
  }

  def - (otro : Fraccion) : Fraccion = {
    val numerador = this.numerador * otro.denominador - otro.numerador * this.denominador
    val denominador = this.denominador * otro.denominador
    new Fraccion(numerador, denominador).simplificar()
  }

  /*
   * Para multiplicar dos fracciones, el procedimiento es muy simple. Solo es necesario
   * hacerlo horizontalmente, es decir, multiplicar ambos numeradores y luego ambos denominadores.
   */
  def * (otro : Fraccion) : Fraccion = {
    val numerador = this.numerador * otro.numerador
    val denominador = this.denominador * otro.denominador
    new Fraccion(numerador, denominador).simplificar()
  }

  def / (otro : Fraccion) : Fraccion = {
    val numerador = this.numerador * otro.denominador
    val denominador = this.denominador * otro.numerador
    new Fraccion(numerador, denominador).simplificar()
  }

  def ==(otro: Fraccion): Boolean = {
    this.simplificar().numerador == otro.simplificar().numerador &&
      this.simplificar().denominador == otro.simplificar().denominador
  }

  def < (otro : Fraccion) : Boolean = {
    this.numerador * otro.denominador < otro.numerador * this.denominador
  }

  def > (otro : Fraccion) : Boolean = {
    this.numerador * otro.denominador > otro.numerador * this.denominador
  }

  def unary_- : Fraccion = {
    new Fraccion(-numerador, denominador)
  }

  override def toString() : String = {
    numerador + "/" + denominador
  }
}