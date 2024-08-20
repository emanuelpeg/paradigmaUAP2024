import {Bien, Mueble, Rodado} from './Bienes';

function main(): void {
    let bienes: Bien[] = [];
    bienes.push(new Rodado("Jeep", 2020, 10_000_000, 10000));
    bienes.push(new Mueble("mesa ratona", 1_500_000, 15));

    for (const bien of bienes) {
        console.log(bien.getNombre() + " --- " + bien.amortizar())
    }
}

// Llamar al método main
main();