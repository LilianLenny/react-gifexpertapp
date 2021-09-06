import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//Componente GifExpertApp
const GifExpertApp = ( ) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Picachu'];
    //Comentamos las categorias y vamos a usar un "hooks de useState"
    /* ¿Qué es un Hook? 
       Un Hook es una función especial que permite “conectarse” a características de React. 
       Por ejemplo, useState es un Hook que te permite añadir el estado de React a un componente de función. 
       Más adelante hablaremos sobre otros Hooks. */

    const initialState = ['One Punch'];
    const [categories, setCategories] = useState(initialState);

    /* Esto lo haremos en un componente aparte
    const handleAdd = () => {
          //categories.push('Pacman'); no usar el push sino usar el setCategories
          //console.log(categories);
          //setCategories ('Pacman'); //asi no se agrega un nuevo elemento al array
          
          //agregar elementos a un array - modelo1
          //setCategories( ['Pacman', ...categories] ); //agregando al principio
          //setCategories( [...categories, 'Pacman'] ); //agregando al final
          
          //otra forma de agregar es usando un callback (donde el primer argumento es el estado anterior) y regresa el nuevo estado - modelo2
          setCategories( cats =>  [...cats, 'Pacman'] );
    }*/
    
    //console.log(categories);

    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories = { setCategories } />     
          
          {/* <button onClick = {handleAdd}>Agregar elemento</button> */}

          <ol className='category-result'>
              {/* {
                  categories.map( (category) => {
                    //return <li key = {category}> {category} </li>  //en key no usar el indice porque es muy volatil. Se usarán "keys" que vengan de base de datos para optimización
                    return <GifGrid category = {category} />
                  })
              } */}

              {
                categories.map( category =>  (
                    <GifGrid 
                          key = { category }
                          category = { category } 
                    />
                ))
              }

          </ol>
          
        </>
    )
}

export default GifExpertApp;
