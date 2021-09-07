import React from 'react';
//import { render } from '@testing-library/react';

import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';  //shallow parecido a render pero más completo

import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', ()=>{

    // test('Debe mostra mensaje "Hola Mundo Mundial"', () => {
    //     //necesitamos renderizar el componente y evaluar el producto sobre el producto rederizado.
    //     const saludo = 'Hola Mundo Mundial';
    //     const { getByText } = render( <PrimeraApp saludo = {saludo} /> ); //aqui almacenamos el producto renderizado. render recibe un componente
    //     //wrapper.getByText
    //     expect ( getByText(saludo) ).toBeInTheDocument();
    // })

    
    //Ahora hacemos test con Enzyme
    test('Debe mostrar <PrimeraApp/> correctamente', () => {
       
        const saludo  = 'Hola Mundo Mundial';
        const wrapper = shallow( <PrimeraApp saludo = {saludo} />);

        expect(wrapper).toMatchSnapshot();  //snapshot
    });
    
    test('Debe mostrar el subtítulo enviado por props ', () => {
        
        const saludo  = 'Hola Mundo Mundial';
        const subtitulo = 'Soy un subtítulo';
        
        //wrapper tiene toda la información del componente renderizado
        const wrapper = shallow( <PrimeraApp 
                                    saludo    = { saludo } 
                                    subtitulo = { subtitulo }
                                 />);

        const textoParrafo = wrapper.find('h2').text();
        console.log(textoParrafo);

        expect ( textoParrafo ).toBe( subtitulo );
        
    });
    
})