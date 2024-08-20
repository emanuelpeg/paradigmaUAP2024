export interface Bien {
    amortizar() : number;
    getNombre(): string
}

export class Mueble implements Bien{

    public constructor(private nombre:string, private valor:number, private porcentage:number){
    }

    public amortizar(): number {
        return this.valor * (this.porcentage / 100);
    }

    public getNombre(): string {
        return this.nombre;
    }
}

export class Rodado implements Bien{

    public constructor(private marca:string, private anio: number, private valor:number, private km:number){
    }

    public amortizar(): number {
        return this.valor/50000000 * (this.km);
    }

    public getNombre(): string {
        return this.marca + "--" + this.anio;
    }
}

