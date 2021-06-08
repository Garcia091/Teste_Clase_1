import '@testing-library/jest-dom'
import {retornaArreglo} from '../../base/07-deses-arr'

describe('Validar vector', () => {
    
    const [letras,numeros] = retornaArreglo();

    test('retornar letras y números ', () => {
        expect(typeof letras).toBe('string')
        expect(letras).toBe('ABC')

        expect(typeof numeros).toBe('number')
        expect(numeros).toBe(123)

    })
    
})

