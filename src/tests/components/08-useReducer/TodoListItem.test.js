import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import {TodoListItem}  from '../../../components/08-useReducer/TodoListItem';
import { demotTodos } from '../../fixtures/demotTodos';
describe('Pruebas en <TodoListItem>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo = {demotTodos[0]}
            index={ 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de llamar la función handleDelete', () => {
        
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith( demotTodos[0].id );

    })

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle).toHaveBeenCalledWith(demotTodos[0].id);
    })

    test('debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${ demotTodos[0].desc }`)
    })

    test('debe de tener la clase complete', () => {
        const todo = demotTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem todo = {demotTodos[0]}/>)
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    

})