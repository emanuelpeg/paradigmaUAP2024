import json.{ArrayJson, FieldJson, ObjectJson, StringJson}

/**
 * Es necesario representar una estructura de datos en formato Json. JSON, acrónimo de JavaScript
 * Object Notation, es un formato de texto ligero para el intercambio de datos. JSON es un
 * subconjunto de la notación literal de objetos de JavaScript aunque hoy, debido a su amplia adopción
 * como alternativa a XML, se considera un formato de lenguaje independiente.
 * Los elementos en json pueden ser:
 * Los objetos en notación json comienzan con { y terminan con } y pueden tener atributos y sus
 * valores (los valores pueden ser otro elemento json) puede contener n atributos.
 * Los arreglos en json comienzan con [ y terminan con ], pueden contener n elementos json separados
 * por coma.
 * Un valor que es un cadena string.
 * Se debe poder modelar una estructura en json e imprimirlo de manera correcta.
 * Un ejemplo de una estructura en json:
 * {“company” : “Example” ,
 *    "employees":[
 *        {"firstName":"John", "lastName":"Doe"},
 *        {"firstName":"Anna", "lastName":"Smith"},
 *     ]
 * }
 */
object Main extends App {

  val root = ObjectJson()
  root.add(FieldJson("company", new StringJson("Example")))

  val array = ArrayJson()
  val aValue = ObjectJson()

  aValue.add(FieldJson("firstName", new StringJson("John")))
  aValue.add(FieldJson("lastName", new StringJson("Doe")))
  array.add(aValue)

  val anOtherValue = ObjectJson()
  anOtherValue.add(FieldJson("firstName", new StringJson("Anna")))
  anOtherValue.add(FieldJson("lastName", new StringJson("Smith")))
  array.add(aValue)

  root.add(FieldJson("employees",array))
  print(root)
}
