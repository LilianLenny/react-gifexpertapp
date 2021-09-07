
//En react hay dos tipos de componentes. 
//1. Los que están basados en clases y 
//2. Los que están basados en funciones

//Vamos a trabajar en base a FUNCIONES = FC  (funcional components)
// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';  //tipos de properties que va a recibir este componente



//const PrimeraApp = ( { saludo = 'Hola Mundo' } ) =>  {

//Para obligar a quien usa el componente defina un saludo por defecto
const PrimeraApp = ( { saludo, subtitulo } ) =>  {

    //const saludo  = [1,2,3,4,5,6,7];
    //const saludo  = 12345.56;
    //const saludo  = false; //No imprimirá nada
    // const saludo = {
    //     nombre: 'Lenny',
    //     edad : 34
    // }
    //const saludo  = 'Hola Mundo Mundo';


    // if ( !saludo ){ //no es recomendable 
    //     throw new Error ('El saludo es necesario');
    // }

    
    return (
        //A. Si queremos devolver un componente con varios elementos debemos incluirlo en 
        //solo elemento. Por ejemplo div. 
        // <div>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </div>

        //B. Como A podría generar elementos innecesarios podemos usar "fragment"
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </Fragment>  

        //C. Fragment puede ser una llamada innecesaria vamos a usar un fragment de manera corta
        // <>
        //     <h1>{ props.saludo }</h1>  
        //     <p>Mi primera aplicación</p>
        // </>
        //{saludo}  en saludo podemos poner string, arrays (concatena elementos),booleanos, números, pero no objetos 

        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre>   */}
            <h2>{ subtitulo }</h2>
        </>

    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;