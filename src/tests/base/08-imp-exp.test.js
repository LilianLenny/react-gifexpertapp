
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

import heroes from '../../data/heroes';



describe ('Pruebas en funciones return heroes', () => {

    test('Debe retornar un Héroe por id', () => {
      
        const id = 1;
        
        const heroe = getHeroeById( id );
        
        const heroeData = heroes.find( hero => hero.id === id );

        expect( heroe ).toEqual( heroeData );
        
    });

    test('Debe retornar undefined si heroe no existe', () => {
      
        const id = 10;
        
        const heroe = getHeroeById( id );
        
        expect( heroe ).toBe( undefined );
        
    });

    //Tareas
    //1. Debe retornar un array con los héroes de DC
    //   owner
    //   toEqual al array filtrado
    test('Debe retornar un array con los héroes de DC', () => {
      
        const owner = 'DC';
        const heroes = getHeroesByOwner (owner);
        const heroesData = heroes.filter( (hero) => hero.owner === owner ); 
        
        expect( heroes ).toEqual( heroesData );
        
    });
    //2. Debe retornar un array con los héroes de MARVEL
    //   length = 2 la longitud debe ser 2
    //   toBe

    test('Debe retornar un array con los héroes de MARVEL', () => {
      
        const owner = 'Marvel';
        const heroes = getHeroesByOwner (owner);
        const heroesDataLenght  = 2; 
        
        expect( heroes.length ).toBe( heroesDataLenght );
        
        
    });
    

});