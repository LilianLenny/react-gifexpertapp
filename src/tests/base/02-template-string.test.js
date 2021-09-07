import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    
    test('getSaludo debe retornar Hola Lenny Romecin', () => {

        const nombre = "Lenny Romecin";
        
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola '+ nombre );
    });

    //TAREA: getSaludo debe retornar Hola Carlos si no hay argumento en el nombre
    test('getSaludo retorna Hola Carlos! si no hay argumento en nombre', () => {

        const saludo = getSaludo(  );

        expect( saludo ).toBe( 'Hola Carlos!' );
    });


});