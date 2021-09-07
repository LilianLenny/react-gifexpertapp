import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y fetch', () => {

        test('Debe retornar url de la imagen', async() => {
            
            //const url = getImagen();  //getImagen retorna una promesa.
            const url = await getImagen();
            console.log( url );

            expect( url.includes('https://') ).toBe( true );
        });

        test('should ', () => {
            
        })
        
        
});