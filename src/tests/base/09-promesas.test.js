
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';



describe('Prueba con promesas', ()=>{

    test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {  //callback done
        
        const id = 1;

        getHeroeByIdAsync( id )
        .then( (heroe) => {

            expect( heroe ).toBe( heroes[0] );

            done(); // ya termina el proceso aquí

        });

    });

    test('getHeroeByIdAsync debe retornar error si heroe no existe', ( done ) => {  //callback hay que usar done() para tareas asyncronas
        
        const id = 10;

        getHeroeByIdAsync( id )
        .catch( error => {

            expect( error ).toBe( 'No se pudo encontrar el héroe' );

            done(); // ya termina el proceso aquí

        });

    });
    
});