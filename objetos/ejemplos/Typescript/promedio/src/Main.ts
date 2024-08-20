import { Alumno } from './Alumno';

function main(): void {
    let unAlumno = new Alumno("Pedro", 3489394);
    unAlumno.add(44)
    unAlumno.add(88)
    unAlumno.add(98)
    console.log(unAlumno.promedio())
}

// Llamar al método main
main();