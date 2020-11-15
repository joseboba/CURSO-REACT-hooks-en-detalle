import '@testing-library/jest-dom';
import React from 'react';
import {TodoAdd} from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';

describe('Pruebas en TodoAdd', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} })

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('debe de llamar la funcion handleAddTodo', () => {
        //con un argumento
        const value = 'Aprende React'
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        })
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
    

})