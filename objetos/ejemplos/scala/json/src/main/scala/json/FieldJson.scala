package json

class FieldJson (val name:String, val value:ElementJson) extends ElementJson {
  override def toString: String = s"\"$name\" : ${value.toString}"
}
