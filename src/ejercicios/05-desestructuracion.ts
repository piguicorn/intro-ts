/*
    ===== Código de TypeScript =====
*/

/* ----- Objetos ----- */

interface Detalles {
    autor: string;
    lanzamiento: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        lanzamiento: 2015
    }
}

const autor = 'Jack';

const { volumen, detalles } = reproductor;
const { autor: autorDetalle } = detalles;

//console.log('El volumen actual es:', volumen);
//console.log('El autor es:', autorDetalle);


/* ----- Arreglos ----- */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz; // si solo necesitamos el 3er elemento [ , , p3]

//console.log('Personaje 3:', p3);