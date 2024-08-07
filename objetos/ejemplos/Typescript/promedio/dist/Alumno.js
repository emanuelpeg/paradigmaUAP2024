"use strict";
class Alumno {
    constructor(nombre, dni) {
        this.notas = new Array();
        this.nombre = nombre;
        this.dni = dni;
    }
    promedio() {
        var acu = 0;
        for (const nota of this.notas) {
            acu += nota;
        }
        return acu / this.notas.length;
    }
    add(nota) {
        this.notas.push(nota);
    }
}
