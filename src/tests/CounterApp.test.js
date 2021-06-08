import React from 'react'
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp'
import '@testing-library/jest-dom'

describe('pruebas <CounterApp/>', () => {

    test('Validar render de <PrimeraApp/>', () => {
        const component = shallow(<CounterApp/>)
        expect(component).toMatchSnapshot(); 
    })   
    
    test('Validar el valor inicial ', () => {
        
        const component = shallow(<CounterApp value ={100} />)

        const valueCount = component.find('h2').text().trim();

        expect(valueCount).toBe('100')
        
    })
    

})