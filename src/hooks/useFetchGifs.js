//Esto es un custom hook que no es otra cosa que una función 
//Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks
//Un custom hook funciona como si fueran un funtional component

import { useState, useEffect } from 'react';

import { getGifs} from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const initialState     =  {
        data: [],
        loading: true
    }
    const [state, setState] = useState(initialState);


    useEffect(() => {
       
        getGifs( category )
        .then( imgs => { //esto es una promesa. Un "Effect" no puede ser async
            setState({
                data: imgs,
                loading: false
            });
        }); 
       
    }, [ category ])

    
    return state; //{data:[], loading:true}
}


