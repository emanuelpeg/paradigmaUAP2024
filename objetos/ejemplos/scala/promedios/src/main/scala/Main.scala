@main def hello(): Unit =
  var unAlumno = new Alumno(456546, "pedro")
  unAlumno.addNota(69)
  unAlumno.addNota(69)
  unAlumno.addNota(69)
  println(unAlumno.promedio)
