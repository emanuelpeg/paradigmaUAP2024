package json

import scala.collection.mutable.ListBuffer

class ArrayJson extends ElementJson {

  val list = ListBuffer[ElementJson]()

  def add(elementJson: ElementJson) = list.addOne(elementJson)

  override def toString: String = s"[${list.mkString(", ")}]"
}
