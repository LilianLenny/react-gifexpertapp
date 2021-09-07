
//Componente CounterApp
import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

const CounterApp = ( { value = 10 } ) => {

    //useState-Hook (no es más que una función)
    //const state = useState('Goku');
    
    //Desestrurando [nombre,función]
    //const [ state, setState ] = useState('Goku');
    //console.log (state, setState);


    const [ counter, setCounter ] = useState( value );
    
    
    //handleAdd
    const handleAdd = () => { 
        // setCounter( (c)=> c + 1);
        setCounter( counter + 1 );
    }
    //handleSubstract
    const handleSubstract = () => setCounter( counter - 1 );

    //handleSubstract
    const handleReset = () => setCounter( value );
    
    return (
        <>
          <h1>CounterApp</h1>
          <h2>{ counter }</h2> 
          <button onClick={  handleAdd  }>+1</button>
          <button onClick={  handleReset  }>Reset</button>
          <button onClick={  handleSubstract  }>-1</button>
          {/* es igual a lo de arriba */}
          {/* <button onClick={  (e) => { handleApp(e) } }>+1</button>  */}
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
