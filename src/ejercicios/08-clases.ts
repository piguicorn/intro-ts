
/*
    ===== Código de TypeScript =====
*/


class PersonaNormal {
    constructor( 
        public nombre: string, 
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal {
    //private alterEgo: string;
    //public edad: number;
    //static nombreReal: string;

    constructor( 
        private alterEgo: string, 
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York' );
    }
}

const ironman = new Heroe('Ironman', 43, 'Tony');

//console.log(ironman);