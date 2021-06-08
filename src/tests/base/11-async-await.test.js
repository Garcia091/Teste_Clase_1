import {getImagen} from '../../base/11-async-await'

describe('Validar url de API', () => {
    test('retornar url', async() => {
        const url = await getImagen()
        console.log(url)
        expect(url.includes('https://')).toBe(true)
})
})
