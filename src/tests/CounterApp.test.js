import React from 'react';
//import { render } from '@testing-library/react';

import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';  //shallow parecido a render pero más completo

import CounterApp from '../CounterApp';


describe('Pruebas en < CounterApp />', ()=>{
    
    let wrapper = shallow( <CounterApp/> );  //shallow sirve para coger el componente

    //beforeEach es una función que se ejecutará antes de cada una de las evaluaciones así mantendremos los datos inicializados
    beforeEach ( () => {
        //console.log('beforeEach!!!!');
        wrapper = shallow( <CounterApp/> ); 
    });

    
    //Ahora hacemos test con Enzyme
    test('Debe mostrar <CounterApp/> correctamente', () => {
        
        /* shallow es una función de Enzyme que se utiliza para probar componentes de forma aislada, ya que no renderiza los subcomponentes. 
           Si deseas renderizar los subcomponentes utiliza render o mount. 
           render es bastante limitado y es recomendado cuando sólo necesitas analizar el resultado de la estructura HTML. */

        expect( wrapper ).toMatchSnapshot();  //snapshot -Los snapshots son una herramienta útil para asegurarnos de que nuestros resultados no cambien de forma inesperada.

        /* EN JEST Assertion library: esta librería es la que hace las asunciones de nuestro código; nos permite crear lineas como expect(true).toBe(true) 
           dándonos "matchers" que no son más que funciones que comparan dos valores y lanza un error sin son diferentes. 
           Entre los matchers que trae consigo Jest se encuentran: toBe, toEqual, toHaveLength y toMatchSnapshot. */

        /* Dato interesante: la consola de javascript tienen una funcionalidad sencilla para esto. Si hacemos console.assert(expected, "No es lo que esperaba")
           la consola imprimirá como un error "No es lo que esperaba" si expected es false y no hará nada si es true. Pruébalo. */

        /* Más simple, más conciso un componente que renderiza una lista, es solo un snapshot y listo. Veamos los snapshots un poco más en profundidad. 
           Cuando creamos los snapshots lo hacemos a través de un matcher de Jest llamado toMatchSnapshot (hay un toMatchInlineSnapshot también que hace prácticamente lo
           mismo).

           Usando toMatchSnapshot
           -----------------------
           Cada vez que corre el test jest verifica que exista un archivo del mismo nombre que el del donde se encuentra el test pero con extensión 
           .snap dentro de la carpeta __snapshots__: (reducer.test.js -> __snapshots__/reducer.test.js.snap)

           La primera vez, como el archivo no está Jest lo creará y ese será el snapshot con el que se correrán nuestros tests.
           Cada vez, después de la primera vez, que se corra el test Jest esperara que el contenido del archivo .snap no haya cambiado. Si el archivo cambia el test falla.
           Si queremos actualizar el snapshot porque hemos cambiado algo y el test está fallando tenemos dos opciones:
           Pulsar u cuando corremos Jest en Watch mode
           Correr directamente el comando jest --updateSnapshot.
        */   

    });

    test('Debe mostrar el valor por defecto 100', () => {

        const counter = 100; 
        //wrapper tiene toda la información del componente renderizado
        const wrapper = shallow(<CounterApp value = { 100 } />);

        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText);

        expect ( counterText ).toBe( `${ counter }` );

    });

    test('Debe incrementar con el botón +1', () => {

        //Necesitamos la referencia a los botones. Usaremos el indice en base a su posición
        wrapper.find('button').at(0).simulate('click');  //Necesitamos simular el evento click

        const counterText = wrapper.find('h2').text().trim();
        
        console.log( counterText );

        expect ( counterText ).toBe( '11' );
        
    });


    test('Debe decrementar con el botón -1', () => {

        //Necesitamos la referencia a los botones. Usaremos el indice en base a su posición
        wrapper.find('button').at(2).simulate('click');  //Necesitamos simular el evento click
        
        const counterText = wrapper.find('h2').text().trim();
        console.log( counterText );
        
        expect ( counterText ).toBe( '9' );
        
    });

    test('Debe colocar un valor por defecto con el botón reset', () => {

        const wrapper = shallow(<CounterApp value = { 105 } />);

        wrapper.find('button').at(0).simulate('click');  //simulamos click en el botón reset

        wrapper.find('button').at(1).simulate('click');  //simulamos click en el botón reset

        const counterText = wrapper.find('h2').text().trim();
        console.log( counterText );
        
    })
    
    
    

})