/*
    ===== Código de TypeScript =====
*/

function sumar (a: number,b: number): number {
    return a + b;
}

// argumentos obligatorios -> opcionales -> por defecto
const sumarFlecha = (a: number, b: number, c?: number, base: number = 2): number => { 
    return a + b;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar( personaje: PersonajeLOR, curarX ): void {
    personaje.pv += curarX;

    console.log( personaje );
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log('Puntos de vida: ', this.pv)
    }
}

curar( nuevoPersonaje, 40);