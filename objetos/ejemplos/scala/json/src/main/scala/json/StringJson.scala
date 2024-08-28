package json

class StringJson (val value:String) extends ElementJson {

  override def toString: String = s"\"$value\""

}
