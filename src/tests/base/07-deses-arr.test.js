
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';



describe('Pruebas en desestructuración',()=>{

    test('Debe retornar un string y un número', () => {
        
        const  arr  = retornaArreglo();
        expect( arr ).toEqual( ['ABC', 123] );

        //Desestructurando array
        const [ letras, numeros ] = retornaArreglo();

        //console.log( typeof letras);
        
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        
        //console.log( typeof numeros);
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

        
    });
    
});
