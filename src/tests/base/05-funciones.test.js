
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

import { getUser , getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        } 

        const user  = getUser();
        
        //expect( user ).toBe( userTest ); // Intenta evaluar 2 objetos no se puede hacer con toBe
        expect( user ).toEqual (userTest);

    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Lenny Romecin';
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        } 
        
        const userActivo = getUsuarioActivo( nombre );
        //console.log(userActivo);
        
        expect(userActivo).toEqual(userActivoTest)
    })
    

});