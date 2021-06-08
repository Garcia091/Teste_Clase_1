import '@testing-library/jest-dom'
import {getSaludo} from '../../base/02-template-string'

describe('Template-string', () => {

    const nombre = 'Carlos'
    const saludo = getSaludo(nombre)
    
    test('Verificar nombre ', () => {
        expect(saludo).toBe('Hola ' + nombre)
    })  
})
