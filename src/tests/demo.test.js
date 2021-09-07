
test('Debe ser true', () => {
    //Aquí se ejecuta la primera prueba
})


//Agrupador general de pruebas (agrupador de test)
describe ('Pruebas en el archivo demo.test.js', ()=>{

    test('Los string deben ser iguales', () => {
        //Aqui ejecutamos la prueba del test
        
        //Esto no se hace (No se escriben así las pruebas)
        // const isActive = true;
        // if ( isActive ){
        //     throw new Error('no está activo');
        // }
    
        //1. Inicialización - preparación
        const mensaje1 = 'Hola Mundo';
    
        //2. Estímulo
        const mensaje2 = `Hola Mundo`;
    
    
        //3. Observar el comportamiento
        if ( mensaje1 === mensaje2 ) {}  //No se comprueba así en los test. Hay que usar JEST - EXPECT - TOBE
        expect ( mensaje1 ).toBe( mensaje2 ); 
    });

    //otros ejemplos 
    test('Dos mas dos son cuatro', () => {
         expect(2 + 2).toBe(4);
    });

});


