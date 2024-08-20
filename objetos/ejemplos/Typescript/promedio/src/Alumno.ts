export class Alumno{
    private notas: number[] = [];

    constructor(private nombre: string, private dni: number){}

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