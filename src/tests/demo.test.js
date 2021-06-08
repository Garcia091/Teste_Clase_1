import '@testing-library/jest-dom'

describe('Pruebas demo.test.js', () => {

    test('los string deben ser iguales', () => {
    
        //Arrange
        const mensajeUno = 'Hola Mundo'
        const mensajeDos = 'Hola Mundo'
     
        //Assert
        expect(mensajeUno).toBe(mensajeDos); // ===
     })
     
})

