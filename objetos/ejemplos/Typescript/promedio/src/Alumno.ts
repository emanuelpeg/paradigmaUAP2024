class Alumno{
    private nombre: string;
    private dni: number;
    private notas = new Array<number>();

    constructor(nombre: string, dni: number){
        this.nombre = nombre;
        this.dni = dni;
    }

    public promedio() {
        var acu = 0;
        for (const nota of this.notas) {
            acu += nota;
        }
        return acu / this.notas.length;
    }

    public add(nota: number){
        this.notas.push(nota);
    }

}