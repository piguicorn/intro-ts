import { Producto, calculaISV } from './06-desestructuracion-func';
/*
    ===== Código de TypeScript =====
*/



const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
];

const [ total, isv ] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);