import React, {useState} from 'react';

import PropTypes from 'prop-types'; 
//estado del input



export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('Buscar...'); //si vacio inputValue es undefined si lo ponemos useState('') será un string vacio y ya no dará error
   
    const handleInputClean = (e) => {
        setInputValue(''); 
    }

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value); 
    }

    const handleSubmit = (e) => {
          e.preventDefault(); //prevenimos el comportamiento normal del formulario
          //console.log('Submit Hecho!!!');

          //Validación submit
          const mayorQueNumeroLetras = 2
          if ( inputValue.trim().length > mayorQueNumeroLetras ){
            
            //Aquí llamamos a setCategories (nos comunicamos con el componente) en el properties de AddCategory
            setCategories( cats =>  [inputValue, ...cats ] );

            setInputValue(''); //para que no haga un doble posteo

          }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <input 
            type='text'
            value={ inputValue }
            onChange = { handleInputChange }
            onFocus  = { handleInputClean }
            />
        </form>
    )
}

//Un pequeño modo de hacer que el campo setCategories sea un requerido (en GifExpertApp el componente debe llevar setCategories como argumento)
AddCategory.propTypes = { setCategories: PropTypes.func.isRequired }