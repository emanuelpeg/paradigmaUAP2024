import json.{ArrayJson, FieldJson, ObjectJson, StringJson}

class MySuite extends munit.FunSuite {

  test("json completo") {
    val root = ObjectJson()
    root.add(FieldJson("company",  StringJson("Example")))

    val array = ArrayJson()
    val aValue = ObjectJson()

    aValue.add(FieldJson("firstName",  StringJson("John")))
    aValue.add(FieldJson("lastName",  StringJson("Doe")))
    array.add(aValue)

    val anOtherValue = ObjectJson()
    anOtherValue.add(FieldJson("firstName",  StringJson("Anna")))
    anOtherValue.add(FieldJson("lastName",  StringJson("Smith")))
    array.add(aValue)

    root.add(FieldJson("employees", array))
    val obtained = root.toString
    val expected = "{\"company\" : \"Example\", \"employees\" : " +
      "[{\"firstName\" : \"John\", \"lastName\" : \"Doe\"}, " +
      "{\"firstName\" : \"John\", \"lastName\" : \"Doe\"}]}"
    assertEquals(obtained, expected)
  }

  test("FieldJson") {
    val root = ObjectJson()
    root.add(FieldJson("company",  StringJson("Example")))

    val obtained = root.toString
    val expected = "{\"company\" : \"Example\"}"
    assertEquals(obtained, expected)
  }

  test("json Array") {

    val array = ArrayJson()
    val aValue = ObjectJson()

    aValue.add(FieldJson("firstName",  StringJson("John")))
    aValue.add(FieldJson("lastName",  StringJson("Doe")))
    array.add(aValue)

    val anOtherValue = ObjectJson()
    anOtherValue.add(FieldJson("firstName",  StringJson("Anna")))
    anOtherValue.add(FieldJson("lastName",  StringJson("Smith")))
    array.add(aValue)

    val obtained = array.toString
    val expected = "[{\"firstName\" : \"John\", \"lastName\" : \"Doe\"}, " +
      "{\"firstName\" : \"John\", \"lastName\" : \"Doe\"}]"
    assertEquals(obtained, expected)
  }

  test("json Array numbers") {

    val array = ArrayJson()

    array.add(StringJson("1"))
    array.add(StringJson("2"))
    array.add(StringJson("3"))
    array.add(StringJson("4"))
    array.add(StringJson("5"))
    array.add(StringJson("6"))

    val expected = "[\"1\", \"2\", \"3\", \"4\", \"5\", \"6\"]"
    assertEquals(array.toString, expected)
  }

  test("json String") {
    val obtained = StringJson("Example").toString
    val expected = "\"Example\""
    assertEquals(obtained, expected)
  }

  test("json super completo") {
    val root = ObjectJson()
    root.add(FieldJson("Facultad", StringJson("Example")))

    val array = ArrayJson()
    val aValue = ObjectJson()
    val notas = ArrayJson()
    notas.add(StringJson("100"))
    notas.add(StringJson("20"))
    notas.add(StringJson("30"))
    notas.add(StringJson("40"))
    notas.add(StringJson("50"))
    notas.add(StringJson("60"))

    aValue.add(FieldJson("firstName", StringJson("John")))
    aValue.add(FieldJson("lastName", StringJson("Doe")))
    aValue.add(FieldJson("notas", notas))
    array.add(aValue)

    val anOtherValue = ObjectJson()
    anOtherValue.add(FieldJson("lastName", StringJson("Smith")))
    anOtherValue.add(FieldJson("firstName", StringJson("Anna")))
    array.add(anOtherValue)

    root.add(FieldJson("alumnos", array))
    val obtained = root.toString
    val expected = "{\"Facultad\" : \"Example\", " +
      "\"alumnos\" : [{\"firstName\" : \"John\", \"lastName\" : \"Doe\", \"notas\" : [\"100\", \"20\", \"30\", \"40\", \"50\", \"60\"]}," +
      " {\"lastName\" : \"Smith\", \"firstName\" : \"Anna\"}]}"
    assertEquals(obtained, expected)
  }


}
