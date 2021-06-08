import React from 'react'
import {shallow} from 'enzyme'
import PrimeraApp from '../PrimeraApp'
import '@testing-library/jest-dom'

describe('pruebas <PrimeraApp/>', () => {
    test('Validar render de <PrimeraApp/>', () => {

        const saludoC = 'Hola clase'
        const subTitulo ='Soy un subtitulo'

        const compo = shallow(
            <PrimeraApp
             saludo={saludoC}
             subtitulo={subTitulo}
              />)
    
        const textParrafo = compo.find('p').text().trim();

        expect(textParrafo).toBe(subTitulo)
        expect(compo).toMatchSnapshot(); 
    })   
})
