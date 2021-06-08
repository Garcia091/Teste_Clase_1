import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Funciones', () => {

    test('Valores iguales ', () => {
        expect(getUser()).toEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'
        })
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre='Juan'
        const user = getUsuarioActivo(nombre)

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})