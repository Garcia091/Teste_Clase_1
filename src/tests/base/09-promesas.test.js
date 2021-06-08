import {getHeroeByIdAsync} from '../../base/09-promesas'
import {heroes} from '../../data/heros'
import '@testing-library/jest-dom'

describe('Pruebas con promesas', () => {
    
    test('Prueba héroe async ', (done) => {
        const id=1;
        getHeroeByIdAsync(id)
        .then(h=>{
            expect(h).toBe(heroes[0])
            done()
        })
    })

    test('Validar héroe no existente ', (done) => {
        const id =10;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
    })
    
})
