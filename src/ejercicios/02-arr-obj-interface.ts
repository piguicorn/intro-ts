/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash', 'counter', 'healing'];

// interfaces: cómo queremos que sea el objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // propiedad opcional
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
};

console.table( personaje );
