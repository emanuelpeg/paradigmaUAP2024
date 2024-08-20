import scala.collection.mutable.ListBuffer

class Alumno (private var dni : Long,
              private var nombre : String) {

  private var notas = new ListBuffer[Integer]()
  
  def promedio = {
    var acu = 0.0
    for(nota <- notas) {
      acu = acu + nota
    }
    acu / this.notas.size
  }
  
  def addNota(nota: Integer): Unit = {
    this.notas.addOne(nota)
  }

}
