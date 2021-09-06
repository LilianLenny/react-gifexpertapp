//COMPONENTE: ES UNA COLECCION DE TODOS LOS ELEMENTOS QUE COINCIDEN CON ESA CATEGORIA


import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//1: import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {

    //const [count, setCount] = useState(0);


    //creamos un nuevo estado para mostrar los títulos de las imágenes
    //const initialState = []; 
    //2: const [images, setImages] = useState(initialState)    

    //3: useEffect( () => {
        //getGifs(); //lamamos aqui a la funcion y no en el cuerpo del componente (**2) y para que se ejecute una sola vez hay que mandar a useEffect un parámetro como
                   // segundo argumento que es un array de dependencias (una lista)

        //getGifs( category ).then( imgs => setImages(imgs) ); //esto retorna una promesa

    //},[ category ]); //Si la categoría cambia debería ejecutar nuevamente getGifs para ello debemos poner en category en el array en el caso que esto suceda

    //Hagamos una peticion https a los gifs -> lo hacemos en una funcion aparte definida en /helpers -> getGifs.js
    

    //Vamos a realizar un custom Hooks para indicar cuando el componente carga inmeditamente al realizar un petición "fetch" e indicarme cuando hace la peticion 
    //y cuando termina la carga
    //comentamos:
    //1:import { getGifs } from '../helpers/getGifs';
    //2:const [images, setImages] = useState(initialState)    
    //3:useEffect( () => {
    //               getGifs( category ).then( imgs => setImages(imgs) ); //esto retorna una promesa
    //            },[ category ]);
    const { loading } = useFetchGifs ();
    
    
    console.log(loading);


    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'cargando...' : 'Fin de carga'}

            
            {/* <div className='card-grid'> */}
                {/* <h3>{ count } </h3>

                <button onClick= { ()=> setCount( count+1 ) }>+1</button>  */}
                {/* cuando llamo a la función setCount incrementamos count Y LLAMAMOS A LA PETICION HTTP ¡NO RECOMENDABLE! porque se dispara cada vez que hay
                    un cambio en el componente. Se ejecuta todo el código del mismo nivel. SOLUCIÓN: USAR useEffect: permite ejecutar cierto código de manera condicional*/}
                
                
                {/* <ol>
                    {
                    images.map( ({ id, title }) =>  (
                        <li key = { id }>{ title }</li>
                    ))
                    }
                </ol> 
                
                sustituimos lo de arriba por el componente gifGridItem  que será el listado*/}
                {/* {
                    images.map( img =>  (
                        <GifGridItem 
                            key = { img.id }
                            
                            // img = { img } 
                            //Mejor usar esto de aqui abajo
                            {... img}
                        />
                    ))
                }     */}
            {/* </div> */}
        </>
    )
}
