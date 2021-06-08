import {getHeroeById,getHeroesByOwner } from '../../base/08-imp-exp'
import '@testing-library/jest-dom'
import {heroes} from '../../data/heros'

describe('Pruebas con función heroes', () => {
    test('Retornar id ', () => {
        
        const id=2;
        const personaje = getHeroeById(id);

        //Hacer el find de los horoes
        const heroeData = heroes.find((h) =>h.id === id);
        expect(heroeData).toEqual(personaje)
    })
    
    test('Retornar undefined si heroe no existe ', () => {
        
        const id=10;
        const personaje = getHeroeById(id);
        expect(personaje).toBe(undefined)
    })
})
