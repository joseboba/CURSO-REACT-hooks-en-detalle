import '@testing-library/jest-dom';
import React from 'react';
import {TodoApp} from '../../../components/08-useReducer/TodoApp'
import { mount, shallow } from 'enzyme';
import { demotTodos } from '../../fixtures/demotTodos';
import { act } from 'react-dom/test-utils';

describe('Pruebas en TodoApp', () => {
    const wrapper = shallow(<TodoApp />)
    Storage.prototype.setItem = jest.fn(() => {})

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un Todo', () => {
        const wrapper = mount( <TodoApp /> );

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demotTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demotTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })

    test('debe de eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demotTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demotTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp ( 0 )');
    })
    
    
    
})
