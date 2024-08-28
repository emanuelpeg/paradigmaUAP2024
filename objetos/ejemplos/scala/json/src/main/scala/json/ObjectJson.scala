package json

import scala.collection.mutable.ListBuffer

class ObjectJson extends ElementJson {

  val list = ListBuffer[FieldJson]()

  def add(elementJson: FieldJson) = list.addOne(elementJson)

  override def toString: String = s"{${list.mkString(", ")}}"
}
