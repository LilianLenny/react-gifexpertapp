
import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

//import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#app'); 

//ReactDom nos permite crear nuestro árbol de componentes
//ReactDOM.render(<PrimeraApp saludo = "Hola Mundo Mundial" />, divRoot);

ReactDOM.render(<CounterApp value = {10} />, divRoot);
